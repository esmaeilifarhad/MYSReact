using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Category
{
   public class GetCategoryParam : Pagination.paginationParam
    {
        public IEnumerable<Domains.Category.Category> Categories { get; set; }
    }
}
