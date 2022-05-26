using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Bicycle
{
  public  class Bicycle: BaseEntity
    {
       
        public string NameSeller { get; set; }
        public string PhoneNumberSeller { get; set; }
        public string AddressSeller { get; set; }
        public string CardNumberSeller { get; set; }
        public string TitleBicycle { get; set; }
        public string Description { get; set; }
        public string DateBuy { get; set; }
        public string DateSell { get; set; }
        public Int64? ExtraPrice { get; set; }
        public Int64? BuyPrice { get; set; }
        public Int64? SellPrice { get; set; }
        public virtual Domains.IdentityDomains.UserApplication UserApplication { get; set; }
        public int UserId { get; set; }
        public bool? IsSell { get; set; }
        public int Size { get; set; }
        public string Img { get; set; }
    }
    public class BicycleConfiguration : IEntityTypeConfiguration<Bicycle>
    {
        public void Configure(EntityTypeBuilder<Bicycle> builder)
        {


            builder.HasOne(q => q.UserApplication).
                WithMany(q => q.Bicycles).
                HasForeignKey(q => q.UserId).
                OnDelete(DeleteBehavior.Cascade);
            builder.HasIndex(q => q.UserId);
            builder.Property(q => q.TitleBicycle).IsRequired();
           
        }
    }
}
