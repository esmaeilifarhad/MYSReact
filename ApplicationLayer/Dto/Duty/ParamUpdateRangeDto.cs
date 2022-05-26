using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Duty
{
   public class ParamUpdateRangeDto
    {
        public string[] DutyIds { get; set; }
        public string Type { get; set; }
        public string DateTaskTrnsafer { get; set; }
    }
}
