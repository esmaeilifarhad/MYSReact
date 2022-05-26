using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.CourseTime
{
   public class CourseTiming : BaseEntity
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Date { get; set; }
        public virtual Domains.CourseTime.Course  Course { get; set; }
        public int CourseId { get; set; }

    }
    public class CourseTimingConfiguration : IEntityTypeConfiguration<CourseTiming>
    {
        public void Configure(EntityTypeBuilder<CourseTiming> builder)
        {


            builder.HasOne(q => q.Course).
                WithMany(q => q.CourseTimings).
                HasForeignKey(q => q.CourseId).
                OnDelete(DeleteBehavior.Cascade);

           // builder.HasIndex(q => new { q.UserId, q.LastModifiedBy });
            builder.Property(x => x.Title).IsRequired();
            builder.Property(x => x.Date).HasMaxLength(8);
        }
    }
}
