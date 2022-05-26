using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Duty
{
   public class GetDutyParamDto : Pagination.paginationParam
    {
        public IEnumerable<Domains.Duty>  Duties { get; set; }

    }
}
