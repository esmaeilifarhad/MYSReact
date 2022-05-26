using Domains.IdentityDomains;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.Menu
{
  public  class MenuRoles:BaseEntity
    {
        public int MenuId { get; set; }
        public int RoleId { get; set; }
        public virtual Menu Menu { get; set; }
        public virtual RoleApplication RoleApplication { get; set; }
    }
    public class MenuRolesConfiguration : IEntityTypeConfiguration<MenuRoles>
    {
        public void Configure(EntityTypeBuilder<MenuRoles> builder)
        {

            
            builder.HasOne(q => q.Menu).
                WithMany(q => q.MenuRoles).
                HasForeignKey(q => q.MenuId).
                OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(q => q.RoleApplication).
               WithMany(q => q.MenuRoles).
               HasForeignKey(q => q.RoleId).
               OnDelete(DeleteBehavior.Cascade);

        }
    }
}
