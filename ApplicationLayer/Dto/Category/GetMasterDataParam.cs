using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Category
{
  public  class GetMasterDataParam : Pagination.paginationParam
    {
        public int CategoryId { get; set; }
        public IEnumerable<Domains.Category.MasterData> masterDatas { get; set; }
    }
}
