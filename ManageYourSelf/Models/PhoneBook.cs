using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class PhoneBook
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Type { get; set; }
        public string? PhoneNumber { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
    }
}
