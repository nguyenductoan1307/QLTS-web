// This file is not generated, but this comment is necessary to exclude it from StyleCop analysis
// <auto-generated/>
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DbEntities
{
    [Table("LichSuRaVaoAngten")]
    public class LichSuRaVaoAngten : FullAuditedEntity<long>, IMayHaveTenant
    {
        public virtual int? TenantId { get; set; }

        public virtual string ReaderMacId { get; set; }

        public virtual string RFID { get; set; }

        public virtual DateTime? Ngay { get; set; }

        public virtual string Chieu { get; set; }

        public virtual int? TaiSanId { get; set; }

        public virtual int ToChuc { get; set; }
    }
}