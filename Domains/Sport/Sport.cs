using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Sport
{
   public class Sport: BaseEntity
    {
       // public int SportId { get; set; }
        //public int CatId { get; set; }
        public string Date { get; set; }
        public int Tedad { get; set; }
        public int? Set { get; set; }

        public virtual Domains.Category.MasterData MasterData { get; set; }
        public int MasterDataId { get; set; }
    }

    public class SportConfiguration : IEntityTypeConfiguration<Sport>
    {
        public void Configure(EntityTypeBuilder<Sport> builder)
        {

            //builder.Property(q => q.Title).IsRequired();
            //builder.Property(q => q.DateTaskIsExecute).IsRequired();

            //builder.HasOne(q => q.UserApplication).
            //    WithMany(q => q.Duties).
            //    HasForeignKey(q => q.UserId).OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(q => q.MasterData).
                WithMany(q => q.Sports).
                HasForeignKey(q => q.MasterDataId).
                OnDelete(DeleteBehavior.Cascade);

        }
    }

}
