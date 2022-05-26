using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.RepeatTask
{
    public class RepeatTaskDetail : BaseEntity
    {
       
        public virtual Domains.RepeatTask.RepeatTask RepeatTask { get; set; }
        public int RepeatTaskId { get; set; }
        public string  Date { get; set; }

    }
    public class RepeatTaskDetailConfiguration : IEntityTypeConfiguration<RepeatTaskDetail>
    {
        public void Configure(EntityTypeBuilder<RepeatTaskDetail> builder)
        {


            builder.HasOne(q => q.RepeatTask).
                WithMany(q => q.RepeatTasks).
                HasForeignKey(q => q.RepeatTaskId).
                OnDelete(DeleteBehavior.Cascade);

            builder.HasIndex(q => new { q.RepeatTaskId, q.Created }).IsUnique();

        }
    }
}


