using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Pagination
{
   public class paginationParam
    {
        private int _take;
        public string Search { get; set; }
        public int skip { get; set; }
        public int take
        {
            get {
                if (_take == 0)
                {
                    return 10;
                }
                else
                {
                    return _take;
                }
                 }   // get method
            set {
                if (value == 0)
                {
                    _take = 10;
                }
                else
                {
                    _take = value;
                }
               
            }  // set method }
        }
        public int CountRecord { get; set; }
    }
    public class PaginationResponse<T>
    {
        public int CountRecord { get; set; }
        public int CurrentPage { get; set; }
        public List<T> lst { get; set; }
    }
}
