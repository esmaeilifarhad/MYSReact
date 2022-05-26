using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class RepeatTask
    {
        public RepeatTask()
        {
            RepeatTaskDetails = new HashSet<RepeatTaskDetail>();
        }

        public int Id { get; set; }
        public int TypeTask { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? Description { get; set; }

        public virtual ICollection<RepeatTaskDetail> RepeatTaskDetails { get; set; }
    }
}
