using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Course
{
    public class GetCourseParamDto : Pagination.paginationParam
    {
        public IEnumerable<CourseDto> Data { get; set; }

    }
}
