using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.PhoneBook
{
   public class GetPhoneBookParamDto : Pagination.paginationParam
    {
        public IEnumerable<PhoneBookDto> Data { get; set; }


    }
}
