using Domains.IdentityDomains;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains
{
   public class Duty:BaseEntity
    {
        public Int64 DateTaskIsExecute { get; set; }
        public string Rate { get; set; }
        public bool IsExecuted { get; set; }
        public string Description { get; set; }
        public virtual Domains.Category.MasterData  MasterData { get; set; }
        public int MasterDataId { get; set; }
    }
    public class DutyConfiguration : IEntityTypeConfiguration<Duty>
    {
        public void Configure(EntityTypeBuilder<Duty> builder)
        {

            builder.Property(q => q.Title).IsRequired();
            builder.Property(q => q.DateTaskIsExecute).IsRequired();

            //builder.HasOne(q => q.UserApplication).
            //    WithMany(q => q.Duties).
            //    HasForeignKey(q => q.UserId).OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(q => q.MasterData).
                WithMany(q => q.Duties).
                HasForeignKey(q => q.MasterDataId).
                OnDelete(DeleteBehavior.Cascade);

        }
    }
}
