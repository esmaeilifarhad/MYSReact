using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class ExampleWord
    {
        public int Id { get; set; }
        public string? Example { get; set; }
        public int CountRead { get; set; }
        public int EnglishWordId { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }

        public virtual EnglishWord EnglishWord { get; set; } = null!;
    }
}
