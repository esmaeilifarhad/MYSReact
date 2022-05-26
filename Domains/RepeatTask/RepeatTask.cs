using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.RepeatTask
{
   public class RepeatTask:BaseEntity
    {
        public TypeTask TypeTask { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Domains.RepeatTask.RepeatTaskDetail>  RepeatTasks { get; set; }
    }
    public enum TypeTask { 
    dayly=0,
    weekly=1,
    monthly=2,
    yearly=3
    }
}
