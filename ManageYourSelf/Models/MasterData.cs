using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class MasterData
    {
        public MasterData()
        {
            Duties = new HashSet<Duty>();
            Sports = new HashSet<Sport>();
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public int Order { get; set; }
        public int UserId { get; set; }
        public int CategoryId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }

        public virtual Category Category { get; set; } = null!;
        public virtual AspNetUser User { get; set; } = null!;
        public virtual ICollection<Duty> Duties { get; set; }
        public virtual ICollection<Sport> Sports { get; set; }
    }
}
