using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class EventDate
    {
        public int Id { get; set; }
        public bool IsHolyDay { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
        public string Date { get; set; } = null!;
        public bool? IsRepeatEveryMonth { get; set; }
        public bool? IsRepeatEveryYear { get; set; }
        public int UserId { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }

        public virtual AspNetUser User { get; set; } = null!;
    }
}
