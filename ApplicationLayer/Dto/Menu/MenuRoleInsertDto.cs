using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Menu
{
   public class MenuRoleInsertDto:Domains.Menu.MenuRoles
    {
        public int[] MenuIds { get; set; }
    }
}
