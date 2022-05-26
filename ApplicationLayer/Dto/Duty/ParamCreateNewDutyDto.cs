using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Dto.Duty
{
    public class ParamCreateNewDutyDto
    {
        public string Title { get; set; }
        public int? Rate { get; set; }
        public string DateTaskIsExecute { get; set; }
        public string Description { get; set; }
        public bool IsExecuted { get; set; }
        //public string DepartmentId { get; set; }
        //public string DepartmentName { get; set; }
    }
}
