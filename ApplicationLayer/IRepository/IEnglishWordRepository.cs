using ApplicationLayer.Dto.Dictionary;
using ApplicationLayer.Dto.Pagination;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
    public interface IEnglishWordRepository : IRepositoryGeneric<Domains.EnglishWord>
    {
        Task<PaginationVM> GetEnglishWordByFilter(GetListEnglishWordParam type);
    }
}
