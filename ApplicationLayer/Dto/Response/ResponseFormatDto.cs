using ApplicationLayer.Utility.DateTimeServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Dto.Response
{
    public class ResponseFormatDto
    {
        public object Data { get; set; }
        public DateTime ResponseDate { get; set; } = DateTime.Now;
        // public DateData DateNow { get; set; } = ApplicationLayer.Utility.DateTimeServices.DateTimeServices.Utl_Date_DayOfWeek();
        public int CountData { get; set; }
        public string Url { get; set; }
        public string Time { get; set; } = DateTime.Now.ToString("HH:mm:ss");
        public string TimeCodeExecute { get; set; }
        public DateData Date { get; set; } = DateTimeServices.Utl_Date_DayOfWeek();
        public bool IsError { get; set; } = false;
    }
}
