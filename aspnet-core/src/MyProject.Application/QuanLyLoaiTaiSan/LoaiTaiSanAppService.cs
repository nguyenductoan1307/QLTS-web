namespace MyProject.QuanLyLoaiTaiSan
{
    using System;
    using System.Collections.Generic;
    using System.Drawing;
    using System.IO;
    using System.Linq;
    using System.Linq.Dynamic.Core;
    using System.Text;
    using System.Threading.Tasks;
    using Abp.Application.Services.Dto;
    using Abp.Domain.Repositories;
    using Abp.Linq.Extensions;
    using Abp.UI;
    using DbEntities;
    using Microsoft.EntityFrameworkCore;
    using MyProject.Data;
    using MyProject.Data.Excel.Dtos;
    using MyProject.Global;
    using MyProject.Net.MimeTypes;
    using MyProject.QuanLyLoaiTaiSan.Dtos;
    using OfficeOpenXml;
    using OfficeOpenXml.Style;

    public class LoaiTaiSanAppService : MyProjectAppServiceBase, ILoaiTaiSanAppService
    {
        private readonly IRepository<LoaiTaiSan> loaiTaiSanRepository;
        private readonly IRepository<TaiSan> taiSanRepository;
        private readonly IAppFolders appFolders;

        public LoaiTaiSanAppService(
            IRepository<LoaiTaiSan> loaiTaiSanRepository,
            IRepository<TaiSan> taiSanRepository,
            IAppFolders appFolders)
        {
            this.loaiTaiSanRepository = loaiTaiSanRepository;
            this.taiSanRepository = taiSanRepository;
            this.appFolders = appFolders;
        }

        public async Task<List<LoaiTaiSanTreeTableForViewDto>> GetAllAsync(LoaiTaiSanGetAllInputDto input)
        {
            #region Check null
            if (input == null)
            {
                throw new UserFriendlyException(StringResources.NullParameter);
            }
            #endregion

            var filter = (from lts in this.loaiTaiSanRepository.GetAll()
                          select new LoaiTaiSanForViewDto
                          {
                              LoaiTaiSan = lts,
                              MaHexa = GlobalFunction.ConverDecimalToHexa(lts.Id, 2),
                          }).ToList();
            List<LoaiTaiSanTreeTableForViewDto> listTong = this.GetLoaiTaiSanTreeTableChildren(filter, null);
            List<LoaiTaiSanTreeTableForViewDto> result = new List<LoaiTaiSanTreeTableForViewDto>();

            var filterText = GlobalFunction.RegexFormat(input.Keyword ?? string.Empty).ToLower();
            if (!string.IsNullOrEmpty(filterText))
            {
                List<LoaiTaiSanTreeTableForViewDto> filterItems = new List<LoaiTaiSanTreeTableForViewDto>();
                foreach (var item in listTong)
                {
                    LoaiTaiSanTreeTableForViewDto newItem = this.FilterItem(item, filterText);
                    if (newItem != null)
                    {
                        filterItems.Add(newItem);
                    }
                }

                result = filterItems;
            }
            else
            {
                result = listTong;
            }

            return await Task.FromResult(result);
        }

        public async Task<LoaiTaiSanCreateInputDto> GetForEditAsync(EntityDto input, bool isView)
        {
            #region Check null
            if (input == null)
            {
                throw new UserFriendlyException(StringResources.NullParameter);
            }
            #endregion

            var entity = await this.loaiTaiSanRepository.FirstOrDefaultAsync(input.Id);
            var edit = this.ObjectMapper.Map<LoaiTaiSanCreateInputDto>(entity);
            return await Task.FromResult(edit);
        }

        public async Task<int> CreateOrEdit(LoaiTaiSanCreateInputDto input)
        {
            #region Check null
            if (input == null)
            {
                throw new UserFriendlyException(StringResources.NullParameter);
            }
            #endregion

            input.Ma = GlobalFunction.RegexFormat(input.Ma);
            input.Ten = GlobalFunction.RegexFormat(input.Ten);
            input.GhiChu = GlobalFunction.RegexFormat(input.GhiChu);

            int isExist = this.CheckExist(input);
            if (isExist > 0)
            {
                return isExist;
            }

            if (input.Id == null)
            {
                await this.Create(input);
            }
            else
            {
                await this.Update(input);
            }

            return 0;
        }

        public async Task<int> DeleteAsync(EntityDto input)
        {
            #region Check null
            if (input == null)
            {
                throw new UserFriendlyException(StringResources.NullParameter);
            }
            #endregion
            if (this.CheckDelete((int)input.Id) == 0)
            {
                await this.loaiTaiSanRepository.DeleteAsync((int)input.Id);
                return 0;
            }

            return 1;
        }

        public async Task<FileDto> ExportToExcel(LoaiTaiSanGetAllInputDto input)
        {
            #region Check null
            if (input == null)
            {
                throw new UserFriendlyException(StringResources.NullParameter);
            }
            #endregion

            // L???y danh s??ch c???n xu???t excel
            var list = await this.GetAllAsync(input);
            using var package = new ExcelPackage();

            var loaiSanPhamIdList = new List<LoaiTaiSanForExportDto>();
            foreach (var lv1 in list)
            {
                this.PrintNodesRecursive(lv1, loaiSanPhamIdList);
            }

            // Add sheet
            ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("LoaiTaiSan");

            var namedStyle = package.Workbook.Styles.CreateNamedStyle("HyperLink");
            namedStyle.Style.Font.UnderLine = true;
            namedStyle.Style.Font.Color.SetColor(Color.Blue);

            // set header
            worksheet.Cells[1, 1].Value = "M??";
            worksheet.Cells[1, 2].Value = "T??n";
            worksheet.Cells[1, 3].Value = "Ghi ch??";

            // B??i ?????m header
            using (ExcelRange r = worksheet.Cells[1, 1, 1, 3])
            {
                using var f = new Font("Calibri", 12, FontStyle.Bold);
                r.Style.Font.SetFromFont(f);
                r.Style.HorizontalAlignment = ExcelHorizontalAlignment.Left;
            }

            // Gan gia tri
            var rowNumber = 2;
            loaiSanPhamIdList.ForEach(item =>
            {
                worksheet.Cells[rowNumber, 1].Value = item.MaLoaiTaiSan;
                worksheet.Cells[rowNumber, 2].Value = item.TenLoaiTaiSan;
                worksheet.Cells[rowNumber, 3].Value = item.GhiChu;
                if (item.BoiDam)
                {
                    worksheet.Cells[rowNumber, 1, rowNumber, 3].Style.Font.Bold = true;
                }

                rowNumber++;
            });

            // Cho c??c ?? r???ng theo d??? li???u
            worksheet.Cells.AutoFitColumns(0);

            worksheet.PrinterSettings.FitToHeight = 1;

            // T??n file
            var fileName = "LoaiTaiSan.xlsx";

            // L??u file v??o server
            using (var stream = new MemoryStream())
            {
                package.SaveAs(stream);
            }

            var file = new FileDto(fileName, MimeTypeNames.ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet);
            var filePath = Path.Combine(this.appFolders.TempFileDownloadFolder, file.FileToken);
            package.SaveAs(new FileInfo(filePath));
            return file;
        }

        /// <summary>
        /// Import excel.
        /// </summary>
        /// <param name="filePath">???????ng d???n file tr??n server.</param>
        /// <returns>Danh s??ch ???????ng d???n.</returns>
        public async Task<string> ImportFileExcel(string filePath)
        {
            StringBuilder returnMessage = new StringBuilder();
            returnMessage.Append("K???t qu??? nh???p file: ");
            ReadFromExcelDto<LoaiTaiSanCreateInputDto> readResult = new ReadFromExcelDto<LoaiTaiSanCreateInputDto>();

            // Kh??ng t??m th???y file
            if (!File.Exists(filePath))
            {
                readResult.ResultCode = (int)GlobalConst.ReadExcelResultCodeConst.FileNotFound;
            }

            // ?????c h???t file excel
            var data = await GlobalFunction.ReadFromExcel(filePath);

            // Kh??ng c?? d??? li???u
            if (data.Count <= 0 || data[0].Count != 4)
            {
                readResult.ResultCode = (int)GlobalConst.ReadExcelResultCodeConst.CantReadData;
            }
            else
            {
                // ?????c l???n l?????t t???ng d??ng
                for (int i = 0; i < data.Count; i++)
                {
                    try
                    {
                        string maLoaiSanPham = GlobalFunction.RegexFormat(data[i][0]);
                        string tenLoaiSanPham = GlobalFunction.RegexFormat(data[i][1]);
                        string loaiSanPhamCha = GlobalFunction.RegexFormat(data[i][2]);
                        string ghiChu = GlobalFunction.RegexFormat(data[i][3]);

                        // N???u nh???p ????? c??? t??n v?? m?? lo???i s???n ph???m
                        if (!string.IsNullOrEmpty(maLoaiSanPham) && !string.IsNullOrEmpty(tenLoaiSanPham))
                        {
                            var queryLTS = this.loaiTaiSanRepository.FirstOrDefault(e => e.Ten.ToLower() == loaiSanPhamCha.ToLower());

                            var create = new LoaiTaiSanCreateInputDto
                            {
                                TaiSanChaId = queryLTS?.Id,
                                Ma = maLoaiSanPham,
                                Ten = tenLoaiSanPham,
                                GhiChu = ghiChu,
                            };

                            // N???u kh??ng b??? tr??ng
                            if ((string.IsNullOrEmpty(loaiSanPhamCha) || queryLTS != null) && await this.CreateOrEdit(create) == 0)
                            {
                                // ????nh d???u c??c b???n ghi th??m th??nh c??ng
                                readResult.ListResult.Add(create);
                            }
                            else
                            {
                                // ????nh d???u c??c b???n ghi l???i
                                readResult.ListErrorRow.Add(data[i]);
                                readResult.ListErrorRowIndex.Add(i + 1);
                            }
                        }
                        else
                        {
                            // ????nh d???u c??c b???n ghi l???i
                            readResult.ListErrorRow.Add(data[i]);
                            readResult.ListErrorRowIndex.Add(i + 1);
                        }
                    }
                    catch
                    {
                        // ????nh d???u c??c b???n ghi l???i
                        readResult.ListErrorRow.Add(data[i]);
                        readResult.ListErrorRowIndex.Add(i + 1);
                    }
                }
            }

            // Th??ng tin import
            readResult.ErrorMessage = GlobalModel.ReadExcelResultCodeSorted[readResult.ResultCode];

            // N???u ?????c file th???t b???i
            if (readResult.ResultCode != 200)
            {
                return readResult.ErrorMessage;
            }
            else
            {
                // ?????c file th??nh c??ng
                // Tr??? k???t qu??? import
                returnMessage.Append(string.Format("\r\n\u00A0-T???ng ghi: {0}", readResult.ListResult.Count + readResult.ListErrorRow.Count));
                returnMessage.Append(string.Format("\r\n\u00A0-S??? b???n ghi th??nh c??ng: {0}", readResult.ListResult.Count));
                returnMessage.Append(string.Format("\r\n\u00A0-S??? b???n ghi th???t b???i: {0}", readResult.ListErrorRow.Count));
                if (readResult.ListErrorRowIndex.Count > 0)
                {
                    returnMessage.Append(string.Format("\r\n\u00A0-C??c d??ng th???t b???i: {0}", string.Join(", ", readResult.ListErrorRowIndex)));
                }
            }

            return returnMessage.ToString();
        }

        /// <summary>
        /// T???i file m???u cho import.
        /// </summary>
        /// <returns>File m???u.</returns>
        public async Task<FileDto> DownloadFileMau()
        {
            string fileName = "LoaiTaiSanImport.xlsx";
            try
            {
                // _appFolders.DemoFileDownloadFolder : Th?? m???c ch??a file m???u c???n t???i
                // _appFolders.TempFileDownloadFolder : Kh??ng ???????c s???a
                return await GlobalFunction.DownloadFileMau(fileName, this.appFolders.LoaiTaiSanFileDownloadFolder, this.appFolders.TempFileDownloadFolder);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("C?? l???i: " + ex.Message);
            }
        }

        private LoaiTaiSanTreeTableForViewDto FilterItem(LoaiTaiSanTreeTableForViewDto item, string filterText)
        {
            if (item.Data.LoaiTaiSan.Ten.ToLower().Contains(filterText) || item.Data.LoaiTaiSan.Ma.ToLower().Contains(filterText))
            {
                return item;
            }
            else
            {
                if (item.Children != null)
                {
                    List<LoaiTaiSanTreeTableForViewDto> children = new List<LoaiTaiSanTreeTableForViewDto>();

                    item.Children.ForEach(child =>
                    {
                        var newChild = this.FilterItem(child, filterText);
                        if (newChild != null)
                        {
                            children.Add(newChild);
                        }
                    });

                    if (children.Count > 0)
                    {
                        var newItem = item;
                        newItem.Expanded = true;
                        newItem.Children = children;
                        return newItem;
                    }
                }
            }

            return null;
        }

        private int CheckDelete(int loaiTaiSanId)
        {
            var query = (from loaiTaiSan in this.loaiTaiSanRepository.GetAll().Where(e => e.Id == loaiTaiSanId)
                         from taiSan in this.taiSanRepository.GetAll().Where(e => e.LoaiTaiSanId == loaiTaiSan.Id)
                         select taiSan.Id).Count();
            return query;
        }

        private int CheckExist(LoaiTaiSanCreateInputDto input)
        {
            // L???y h???t id cha con c???a th???ng cha
            input.Ma = GlobalFunction.RegexFormat(input.Ma);
            input.Ten = GlobalFunction.RegexFormat(input.Ten);

            // N???u query > 0 th?? l?? b??? tr??ng m?? => return true
            var query = this.loaiTaiSanRepository.GetAll().Where(e => e.TaiSanChaId == input.TaiSanChaId && (e.Ma == input.Ma || e.Ten == input.Ten))
                .WhereIf(input.Id != null, e => e.Id != input.Id).FirstOrDefault();
            if (query != null)
            {
                if (query.Ma.ToLower() == input.Ma.ToLower())
                {
                    return 1;
                }
                else if (query.Ten.ToLower() == input.Ten.ToLower())
                {
                    return 2;
                }
            }

            return 0;
        }

        private async Task Create(LoaiTaiSanCreateInputDto input)
        {
            var create = this.ObjectMapper.Map<LoaiTaiSan>(input);
            await this.loaiTaiSanRepository.InsertAndGetIdAsync(create);
        }

        private async Task Update(LoaiTaiSanCreateInputDto input)
        {
            var update = await this.loaiTaiSanRepository.FirstOrDefaultAsync((int)input.Id);
            this.ObjectMapper.Map(input, update);
        }

        private List<LoaiTaiSanTreeTableForViewDto> GetLoaiTaiSanTreeTableChildren(List<LoaiTaiSanForViewDto> listTong, int? id)
        {
            return listTong.Where(w => w.LoaiTaiSan.TaiSanChaId == id).OrderBy(e => e.LoaiTaiSan.Ten).Select(w => new LoaiTaiSanTreeTableForViewDto
            {
                Expanded = true,
                Data = w,
                Children = this.GetLoaiTaiSanTreeTableChildren(listTong, w.LoaiTaiSan.Id),
            }).ToList();
        }

        private void PrintNodesRecursive(LoaiTaiSanTreeTableForViewDto oParentNode, List<LoaiTaiSanForExportDto> list, string prePad = "")
        {
            if (oParentNode.Data.LoaiTaiSan.TaiSanChaId == null)
            {
                list.Add(new LoaiTaiSanForExportDto
                {
                    MaLoaiTaiSan = oParentNode.Data.LoaiTaiSan.Ma,
                    TenLoaiTaiSan = oParentNode.Data.LoaiTaiSan.Ten,
                    GhiChu = oParentNode.Data.LoaiTaiSan.GhiChu,
                    BoiDam = true,
                });
                prePad = string.Empty;
            }

            prePad += "--";

            // Start recursion on all subnodes.
            foreach (LoaiTaiSanTreeTableForViewDto oSubNode in oParentNode.Children)
            {
                list.Add(new LoaiTaiSanForExportDto
                {
                    MaLoaiTaiSan = prePad + oSubNode.Data.LoaiTaiSan.Ma,
                    TenLoaiTaiSan = oSubNode.Data.LoaiTaiSan.Ten,
                    GhiChu = oSubNode.Data.LoaiTaiSan.GhiChu,
                    BoiDam = false,
                });
                this.PrintNodesRecursive(oSubNode, list, prePad);
            }
        }
    }
}
