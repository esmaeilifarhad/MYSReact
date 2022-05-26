using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domains.CourseTime
{
   public class Course: BaseEntity
    {
        [MaxLength(8)]
        public string StartDate { get; set; }
        [MaxLength(8)]
        public string EndDate { get; set; }
        public int? TotalDay { get; set; }
        public int Percent { get; set; }
        public bool IsActive { get; set; }

        public virtual Domains.IdentityDomains.UserApplication UserApplication { get; set; }
        public int UserId { get; set; }
        public virtual ICollection<Domains.CourseTime.CourseTiming>  CourseTimings { get; set; }
        public virtual ICollection<Domains.CourseTime.Planning> Planning { get; set; }
    }
    public class CourseConfiguration : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {


            builder.HasOne(q => q.UserApplication).
                WithMany(q => q.Courses).
                HasForeignKey(q => q.UserId).
                OnDelete(DeleteBehavior.Cascade);

            builder.Property(x => x.StartDate).HasMaxLength(8);
            //builder.HasIndex(q => new { q.UserId, q.LastModifiedBy });
            builder.Property(x => x.Title).IsRequired();
        }
    }
}
