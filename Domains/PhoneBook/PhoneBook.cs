using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.PhoneBook
{
   public class PhoneBook: BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Type { get; set; }
        public string PhoneNumber { get; set; }
    }
    public class PhoneBookConfiguration : IEntityTypeConfiguration<PhoneBook>
    {
        public void Configure(EntityTypeBuilder<PhoneBook> builder)
        {

            //builder.Property(q => q.Title).IsRequired();
        

        }
    }
}
