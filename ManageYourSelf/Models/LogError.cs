using System;
using System.Collections.Generic;

namespace ManageYourSelf.Models
{
    public partial class LogError
    {
        public int Id { get; set; }
        public string? Execption { get; set; }
        public string? InnnerExeption { get; set; }
        public string? ActionName { get; set; }
        public string? ControlName { get; set; }
        public string? Time { get; set; }
        public DateTime Date { get; set; }
    }
}
