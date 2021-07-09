// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis
// <auto-generated/>
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DbEntities
{
    [Table("KiemKeTaiSan")]
    public class KiemKeTaiSan : FullAuditedEntity<long>, IMayHaveTenant
    {
        public virtual int? TenantId { get; set; }
        public virtual string MaKiemKe { get; set; }
        public virtual string TenKiemKe { get; set; }
        public virtual DateTime? ThoiGianBatDauDuKien { get; set; }
        public virtual DateTime? ThoiGianBatDauThucTe { get; set; }
        public virtual DateTime? ThoiGianKetThucDuKien { get; set; }
        public virtual DateTime? ThoiGianKetThucThucTe { get; set; }
        public virtual int? BoPhanDuocKiemKeId { get; set; }
        public virtual int? TrangThaiId { get; set; }
        public virtual string GhiChu { get; set; }
        public virtual ICollection<KiemKe_DoiKiemKe> DoiKiemKeList { get; set; }
    }
}
