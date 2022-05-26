using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Account.Role
{
   public class UserRoleDto
    {
        public string UserId { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
