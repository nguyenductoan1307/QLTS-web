// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis 
// <auto-generated/> 
using Abp.UI;
using Microsoft.AspNetCore.Mvc;
using MyProject.Data;
using MyProject.Global;
using MyProject.Net.MimeTypes;
using System;
using System.Collections.Generic;
using System.IO;

using System.Threading.Tasks;

namespace MyProject.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UploadController : MyProjectControllerBase
    {
        private readonly IAppFolders _appFolders;
        public UploadController(IAppFolders appFolders)
        {
            _appFolders = appFolders;
        }

        [HttpPost]
        public async Task<List<string>> DemoUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.DemoUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }

        [HttpPost]
        public async Task<List<string>> NhaCungCapUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.NhaCungCapUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }

        [HttpPost]
        public async Task<List<string>> DuTruMuaSamUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.DuTruMuaSamUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }


        [HttpPost]
        public async Task<List<string>> ToanBoTSUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.ToanBoTSUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }

        [HttpPost]
        public async Task<List<string>> ToChucUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.ToChucUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }

        [HttpPost]
        public async Task<List<string>> LoaiTaiSanUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.LoaiTaiSanUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }

        [HttpPost]
        public async Task<List<string>> ViTriDiaLyUpload()
        {
            string fileFolderPath = Path.Combine(_appFolders.ViTriDiaLyUploadFolder + @"\" + string.Format("{0:yyyyMMdd_hhmmss}", DateTime.Now));
            return await Upload(fileFolderPath);
        }


        /// <summary>
        /// Không sửa
        /// </summary>
        /// <param name="fileFolderPath"></param>
        /// <returns></returns>
        private async Task<List<string>> Upload(string fileFolderPath)
        {
            List<string> result = new List<string>();

            // Náº¿u khÃ´ng cÃ³ file 
            if (Request.Form.Files == null || Request.Form.Files.Count <= 0)
            {
                return result;
            }
            foreach (var file in Request.Form.Files)
            {
                result.Add(GlobalFunction.SaveFile(fileFolderPath, file));
            }
            return await Task.FromResult(result);
        }

    }
}
