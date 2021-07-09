// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis
// <auto-generated/>
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DbEntities
{
    [Table("KiemKe_KetQuaKiemKe")]
    public class KiemKe_KetQuaKiemKe : FullAuditedEntity<long>, IMayHaveTenant
    {
        public virtual int? TenantId { get; set; }
        public virtual long? KiemKeTaiSanId { get; set; }
        public virtual int? DauDocId { get; set; }
        public virtual int? TaiSanId { get; set; }
        public virtual int? ViTriDiaLyId { get; set; }
        public virtual int? TrangThaiTaiSanId { get; set; }
        public virtual int? KetQua { get; set; }
        public virtual string Code { get; set; }
        public virtual string GhiChu { get; set; }
    }
}