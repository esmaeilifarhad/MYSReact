using Domains.RepeatTask;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.RepeatTask
{
   public class RepeatTaskDetailsDto
    {
        public int[] ids { get; set; }
        public TypeTask  typeTask { get; set; }
    }
}
