using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Course
{
    public class GetCourseTimingParamDto : Pagination.paginationParam
    {
        public IEnumerable<CourseTimingDto> Data { get; set; }

    }
}
