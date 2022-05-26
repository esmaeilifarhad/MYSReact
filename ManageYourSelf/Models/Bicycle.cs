using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class Bicycle
    {
        public int Id { get; set; }
        public string? NameSeller { get; set; }
        public string? PhoneNumberSeller { get; set; }
        public string? AddressSeller { get; set; }
        public string? CardNumberSeller { get; set; }
        public string TitleBicycle { get; set; } = null!;
        public string? Description { get; set; }
        public string? DateBuy { get; set; }
        public string? DateSell { get; set; }
        public long? ExtraPrice { get; set; }
        public long? BuyPrice { get; set; }
        public long? SellPrice { get; set; }
        public int UserId { get; set; }
        public bool? IsSell { get; set; }
        public int Size { get; set; }
        public DateTime? Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
        public string? LastModifiedBy { get; set; }
        public bool? IsDeleted { get; set; }
        public string? Time { get; set; }
        public string? Title { get; set; }
        public string? CreatedShamsy { get; set; }
        public string? LastModifiedShamsy { get; set; }
        public string? Img { get; set; }

        public virtual AspNetUser User { get; set; } = null!;
    }
}
