using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Menu
{
  public  class SubMenu: BaseEntity
    {
        //public string Title { get; set; }
        public string Action { get; set; }
        public int Order { get; set; }
        public bool IsDisable { get; set; }
        public int MenuId { get; set; }
        public virtual Menu Menu { get; set; }
    }

    public class SubMenuConfiguration : IEntityTypeConfiguration<SubMenu>
    {
        public void Configure(EntityTypeBuilder<SubMenu> builder)
        {


            builder.HasOne(q => q.Menu).
                WithMany(q => q.SubMenus).
                HasForeignKey(q => q.MenuId).
                OnDelete(DeleteBehavior.Cascade);

            builder.Property(x => x.Title).IsRequired();

        }
    }
}
