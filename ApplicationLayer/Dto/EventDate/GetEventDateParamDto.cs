using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.EventDate
{
   public class GetEventDateParamDto : Pagination.paginationParam
    {
        public IEnumerable<Domains.EventDate> EventDates { get; set; }

    }
}
