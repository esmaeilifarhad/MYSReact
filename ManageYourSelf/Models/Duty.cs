using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Duty
    {
        public int Id { get; set; }
        public long DateTaskIsExecute { get; set; }
        public string? Rate { get; set; }
        public string Title { get; set; } = null!;
        public int MasterDataId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public bool? IsExecuted { get; set; }
        public string? Description { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }

        public virtual MasterData MasterData { get; set; } = null!;
    }
}
