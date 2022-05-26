using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.CourseTime
{
  public  class Planning : BaseEntity
    {
        public bool IsExecuted { get; set; }
        public int Order { get; set; }
        public int OrderSet { get; set; }
        public string Date { get; set; }
        public virtual Domains.CourseTime.Course Course { get; set; }
        public int CourseId { get; set; }
    }
    public class PlanningConfiguration : IEntityTypeConfiguration<Planning>
    {
        public void Configure(EntityTypeBuilder<Planning> builder)
        {


            builder.HasOne(q => q.Course).
                WithMany(q => q.Planning).
                HasForeignKey(q => q.CourseId).
                OnDelete(DeleteBehavior.Cascade);

            // builder.HasIndex(q => new { q.UserId, q.LastModifiedBy });
            builder.Property(x => x.Title).IsRequired();
            builder.Property(x => x.Date).HasMaxLength(8);
        }
    }
}
