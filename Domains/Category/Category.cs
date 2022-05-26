using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Category
{
   public class Category: BaseEntity
    {
        public string Key { get; set; }
        public virtual ICollection<Domains.Category.MasterData> MasterDatas { get; set; }
        
    }
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {


            //builder.HasOne(q => q.UserApplication).
            //    WithMany(q => q.Categories).
            //    HasForeignKey(q => q.UserId).
            //    OnDelete(DeleteBehavior.Cascade);

            builder.HasIndex(q => q.Key).IsUnique();
            builder.Property(x => x.Title).IsRequired();
        }
    }
}
