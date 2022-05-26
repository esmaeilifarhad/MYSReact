using ApplicationLayer.Utility.DateTimeServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Common
{
   public class ResponseFormat
    {
        public object Data { get; set; }
        public DateTime ResponseDate { get; set; } = DateTime.Now;
        public DateData DateNow { get; set; } = ApplicationLayer.Utility.DateTimeServices.DateTimeServices.Utl_Date_DayOfWeek();
        public int CountData { get; set; }
        public string Url { get; set; }
    }
}
