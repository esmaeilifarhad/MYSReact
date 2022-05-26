using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Sport
    {
        public int Id { get; set; }
        public string? Date { get; set; }
        public int Tedad { get; set; }
        public int? Set { get; set; }
        public int MasterDataId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }

        public virtual MasterData MasterData { get; set; } = null!;
    }
}
