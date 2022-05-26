using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class SubMenu
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Action { get; set; }
        public int Order { get; set; }
        public bool IsDisable { get; set; }
        public int MenuId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }

        public virtual Menu Menu { get; set; } = null!;
    }
}
