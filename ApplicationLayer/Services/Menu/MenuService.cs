using ApplicationLayer.Dto.Common;
using ApplicationLayer.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Menu
{
    public class MenuService : IMenuService

    {
        public IMenuRepository _menuRepo { get; }
        public MenuService(IMenuRepository menuRepo)
        {
            _menuRepo = menuRepo;
        }
        public async Task<CommonDto<Domains.Menu.Menu>> menusPagination(int skip, int take = 10, string search = "")
        {
            return await _menuRepo.GetPagination(null, q => q.OrderByDescending(x => x.Order), "", skip, take);
        }


        public async Task<List<Domains.Menu.Menu>> menus()
        {
            //return await _menuRepo.GetPagination();
            return await _menuRepo.menus();
        }

        public async Task<Domains.Menu.Menu> GetItemById(int id)
        {
           return await _menuRepo.GetById(id);
        }

        public async Task<Domains.Menu.Menu> CreateUpdate(Domains.Menu.Menu menu)

        { 
            Domains.Menu.Menu menu1 = menu;
            if (menu.Id == 0)
            {
                menu1= await _menuRepo.Insert(menu);
            }
            else
            {
               var old= await _menuRepo.GetById(menu.Id);
                old.Order = menu.Order;
                old.Title = menu.Title;
                old.Action = menu.Action;
                menu1 = await  _menuRepo.Update(old);
            }
            return menu1;
        }

        public async Task DeleteMenu(int id)
        {
           await _menuRepo.DeleteById(id);
        }
    }
}
