using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Dictionary
{
  public  class GetListEnglishWordParam:Pagination.paginationParam
    {
        public string searchInWord { get; set; }
        public int typeFilter { get; set; }
    }
}
