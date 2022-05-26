using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
   public interface IMasterDataRepository:IRepositoryGeneric<Domains.Category.MasterData>
    {
        Task<IEnumerable<Domains.Category.MasterData>> getByCategoryTitle(string title);
        Task<IEnumerable<Domains.Category.MasterData>> getByCategoryId(int categoryId);
    }
}
