using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains
{
   public class ExampleWord: BaseEntity
    {
        public string Example { get; set; }
        public int CountRead { get; set; }
        public virtual  Domains.EnglishWord EnglishWord { get; set; }
        public int EnglishWordId { get; set; }
    }
    public class ExampleWordConfiguration : IEntityTypeConfiguration<ExampleWord>
    {
        public void Configure(EntityTypeBuilder<ExampleWord> builder)
        {


            builder.HasOne(q => q.EnglishWord).
                WithMany(q => q.ExampleWords).
                HasForeignKey(q => q.EnglishWordId).
                OnDelete(DeleteBehavior.Cascade);


        }
    }
}
