using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Category
{
   public class MasterData:BaseEntity
    {
        //public string Title { get; set; }
        public int Order { get; set; }
        public virtual Domains.IdentityDomains.UserApplication UserApplication { get; set; }
        public int UserId { get; set; }

        public virtual Domains.Category.Category Category { get; set; }
        public int CategoryId { get; set; }

        public virtual ICollection<Domains.Duty> Duties { get; set; }
        public virtual ICollection<Domains.Sport.Sport>  Sports { get; set; }
    }
    public class MasterDataConfiguration : IEntityTypeConfiguration<MasterData>
    {
        public void Configure(EntityTypeBuilder<MasterData> builder)
        {


            builder.HasOne(q => q.UserApplication).
                WithMany(q => q.MasterDatas).
                HasForeignKey(q => q.UserId).
                OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(q => q.Category).
          WithMany(q => q.MasterDatas).
          HasForeignKey(q => q.CategoryId).
          OnDelete(DeleteBehavior.Cascade);

            builder.HasIndex(q => new { q.UserId,q.CategoryId });
            builder.Property(x => x.Title).IsRequired();
        }
    }
}
