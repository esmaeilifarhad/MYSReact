using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ApplicationLayer.Dto.Course
{
   public class CourseDto
    {
        public int Id { get; set; }
        //[Display(Name = "عنوان")]
        public string Title { get; set; }
        public bool IsActive { get; set; }
        public int Percent { get; set; }
    }
}
