using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Dto.Duty
{
    public class InputUpdateDutyDto:Domains.Duty
    {
        public int type { get; set; }
        public int[] checkedArray { get; set; }
    }
}
