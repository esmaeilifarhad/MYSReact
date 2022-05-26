using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Menu
{
   public class GetMenuParam : Pagination.paginationParam
    {
        public IEnumerable<Domains.Menu.Menu> Menus { get; set; }
    }
}
