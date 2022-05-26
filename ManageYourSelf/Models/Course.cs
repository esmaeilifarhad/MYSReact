using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Course
    {
        public Course()
        {
            CourseTimings = new HashSet<CourseTiming>();
            Plannings = new HashSet<Planning>();
        }

        public int Id { get; set; }
        public int Percent { get; set; }
        public bool IsActive { get; set; }
        public int UserId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string Title { get; set; } = null!;
        public string? StartDate { get; set; }
        public int? TotalDay { get; set; }
        public string? EndDate { get; set; }

        public virtual AspNetUser User { get; set; } = null!;
        public virtual ICollection<CourseTiming> CourseTimings { get; set; }
        public virtual ICollection<Planning> Plannings { get; set; }
    }
}
