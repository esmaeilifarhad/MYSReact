using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Category
    {
        public Category()
        {
            MasterData = new HashSet<MasterData>();
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? Key { get; set; }

        public virtual ICollection<MasterData> MasterData { get; set; }
    }
}
