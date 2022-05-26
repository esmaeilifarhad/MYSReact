using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains
{
   public class EventDate : BaseEntity
    {
        private bool isHolyDay; // field

        public bool IsHolyDay   // property
        {
            get { return isHolyDay; }   // get method
            set {
                if (value == false)
                {
                    isHolyDay = value;
                }
                else
                {
                    isHolyDay = value;
                }
               
            }  
        }
        public string Date { get; set; }
        public bool IsRepeatEveryYear { get; set; }
        public bool IsRepeatEveryMonth { get; set; }
        public virtual Domains.IdentityDomains.UserApplication UserApplication { get; set; }
        public int UserId { get; set; }
        
    }
    public class EventDateConfiguration : IEntityTypeConfiguration<EventDate>
    {
        public void Configure(EntityTypeBuilder<EventDate> builder)
        {
            builder.HasOne(q => q.UserApplication).
              WithMany(q => q.EventDates).
              HasForeignKey(q => q.UserId).
              OnDelete(DeleteBehavior.Cascade);

            builder.Property(q => q.Date).HasMaxLength(8).IsRequired();
            //builder.Property(q => q.DateTaskIsExecute).IsRequired();

            ////builder.HasOne(q => q.UserApplication).
            ////    WithMany(q => q.Duties).
            ////    HasForeignKey(q => q.UserId).OnDelete(DeleteBehavior.Cascade);

            //builder.HasOne(q => q.MasterData).
            //    WithMany(q => q.Duties).
            //    HasForeignKey(q => q.MasterDataId).
            //    OnDelete(DeleteBehavior.Cascade);

        }
    }
}
