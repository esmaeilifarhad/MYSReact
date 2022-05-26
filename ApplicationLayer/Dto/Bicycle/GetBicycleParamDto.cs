using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Bicycle
{
   public class GetBicycleParamDto : Pagination.paginationParam
    {
        public IEnumerable<Domains.Bicycle.Bicycle>  Bicycles { get; set; }
    }
}
