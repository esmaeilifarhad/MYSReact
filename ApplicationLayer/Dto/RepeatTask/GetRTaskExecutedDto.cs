using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.RepeatTask
{
    public class GetRTaskExecutedDto
    {
        public int RepeatTaskId { get; set; }
        public string Title { get; set; }
        public bool IsExecuted { get; set; }
        public string Date { get; set; }
    }
}
