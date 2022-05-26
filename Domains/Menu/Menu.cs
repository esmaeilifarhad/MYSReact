using Domains.IdentityDomains;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domains.Menu
{
   public class Menu:BaseEntity
    {
        //public string Title { get; set; }
        [MaxLength(30)]
        public string Action { get; set; }
        [MaxLength(30)]
        public string Url { get; set; }
        public int Order { get; set; }
        public bool IsDisable { get; set; }
        public bool IsSubMenu { get; set; }
        public virtual IEnumerable<MenuRoles> MenuRoles  { get; set; }
        public virtual IEnumerable<SubMenu> SubMenus { get; set; }

    }
    public class MenuConfiguration : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> builder)
        {

            builder.Property(q => q.Title).IsRequired();

        }
    }
}
