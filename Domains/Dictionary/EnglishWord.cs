using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains
{
   public   class EnglishWord:BaseEntity
    {
        public string English { get; set; }
        public string Persian { get; set; }
        public int Level { get; set; }
        public int SuccessCount { get; set; }
        public int UnsuccessCount { get; set; }
        public string DateRefresh { get; set; }
        public virtual Domains.IdentityDomains.UserApplication UserApplication { get; set; }
        public int UserId { get; set; }
        public virtual ICollection<Domains.ExampleWord> ExampleWords { get; set; }
        public string RefreshTime { get; set; }
        public bool LastStatus { get; set; }
    }
    public class EnglishWordConfiguration : IEntityTypeConfiguration<EnglishWord>
    {
        public void Configure(EntityTypeBuilder<EnglishWord> builder)
        {

          
            builder.HasOne(q => q.UserApplication).
                WithMany(q => q.EnglishWords).
                HasForeignKey(q => q.UserId).
                OnDelete(DeleteBehavior.Cascade);

            builder.HasIndex(q => new { q.English, q.LastModifiedBy }).IsUnique();

        }
    }

}
