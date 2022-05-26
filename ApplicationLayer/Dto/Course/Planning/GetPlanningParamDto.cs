using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Course.Planning
{
   public class GetPlanningParamDto : Pagination.paginationParam
    {
        public int courseId { get; set; }
        public IEnumerable<Domains.CourseTime.Planning> Data { get; set; }

    }
}
