using ApplicationLayer.Dto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Menu
{
    public interface IMenuService
    {
        Task<List<Domains.Menu.Menu>> menus();
        Task<CommonDto<Domains.Menu.Menu>> menusPagination(int skip, int take = 10, string search = "");

        Task<Domains.Menu.Menu> GetItemById(int id);
        Task<Domains.Menu.Menu> CreateUpdate(Domains.Menu.Menu menu);
        Task DeleteMenu(int id);
    }
}
