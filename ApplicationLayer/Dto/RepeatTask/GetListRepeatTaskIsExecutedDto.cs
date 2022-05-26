using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.RepeatTask
{
   public class GetListRepeatTaskIsExecutedDto:Domains.RepeatTask.RepeatTask
    {
        public bool IsExecuted { get; set; }
    }
}
