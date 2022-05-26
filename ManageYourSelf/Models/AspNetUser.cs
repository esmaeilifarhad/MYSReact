using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class AspNetUser
    {
        public AspNetUser()
        {
            AspNetUserClaims = new HashSet<AspNetUserClaim>();
            AspNetUserLogins = new HashSet<AspNetUserLogin>();
            AspNetUserTokens = new HashSet<AspNetUserToken>();
            Bicycles = new HashSet<Bicycle>();
            Courses = new HashSet<Course>();
            EnglishWords = new HashSet<EnglishWord>();
            EventDates = new HashSet<EventDate>();
            MasterData = new HashSet<MasterData>();
            Roles = new HashSet<AspNetRole>();
        }

        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserName { get; set; }
        public string? NormalizedUserName { get; set; }
        public string? Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public string? PasswordHash { get; set; }
        public string? SecurityStamp { get; set; }
        public string? ConcurrencyStamp { get; set; }
        public string? PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public bool LockoutEnabled { get; set; }
        public int AccessFailedCount { get; set; }
        public string? NormalizedEmail { get; set; }

        public virtual ICollection<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual ICollection<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual ICollection<AspNetUserToken> AspNetUserTokens { get; set; }
        public virtual ICollection<Bicycle> Bicycles { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<EnglishWord> EnglishWords { get; set; }
        public virtual ICollection<EventDate> EventDates { get; set; }
        public virtual ICollection<MasterData> MasterData { get; set; }

        public virtual ICollection<AspNetRole> Roles { get; set; }
    }
}
