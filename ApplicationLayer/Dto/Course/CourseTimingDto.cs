using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Course
{
   public class CourseTimingDto
    {
        public int Id { get; set; }
        //[Display(Name = "عنوان")]
        public string Title { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
    }
}
