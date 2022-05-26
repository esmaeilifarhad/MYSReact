using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class EnglishWord
    {
        public EnglishWord()
        {
            ExampleWords = new HashSet<ExampleWord>();
        }

        public int Id { get; set; }
        public string? English { get; set; }
        public string? Persian { get; set; }
        public int Level { get; set; }
        public int SuccessCount { get; set; }
        public int UnsuccessCount { get; set; }
        public string? DateRefresh { get; set; }
        public int UserId { get; set; }
        public bool LastStatus { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? RefreshTime { get; set; }

        public virtual AspNetUser User { get; set; } = null!;
        public virtual ICollection<ExampleWord> ExampleWords { get; set; }
    }
}
