using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Pagination
{
    public class PaginationVM
    {
        public int CountRecord { get; set; }
        public int skip { get; set; }
        public int take { get; set; }
        public IEnumerable<Domains.EnglishWord> englishWords { get; set; }
    }
}
