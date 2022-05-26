using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
   public interface IMenuRepository : IRepositoryGeneric<Domains.Menu.Menu>
    {
        Task<List<Domains.Menu.Menu>> menus();
    }
}
