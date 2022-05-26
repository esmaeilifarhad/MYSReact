using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.IdentityDomains
{
    public class UserApplication : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<UserRoleApplication> UserRoleApplications { get; set; }
        //public virtual ICollection<Duty> Duties { get; set; }
        public virtual ICollection<Domains.EnglishWord> EnglishWords {get;set;}
        public virtual ICollection<Domains.Bicycle.Bicycle> Bicycles { get; set; }
        public virtual ICollection<Domains.Category.MasterData> MasterDatas { get; set; }
        public virtual ICollection<Domains.EventDate>  EventDates { get; set; }
        public virtual ICollection<Domains.CourseTime.Course>  Courses { get; set; }
    }
    public class UserApplicationConfiguration : IEntityTypeConfiguration<UserApplication>
    {
        public void Configure(EntityTypeBuilder<UserApplication> builder)
        {
            builder.HasIndex(q => new { q.UserName }).IsUnique();
          //  builder.Ignore(p => p.NormalizedEmail);
        }
    }

}
