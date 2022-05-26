using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Account
{
    public class UserRoleDto
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public bool IsBelong { get; set; }
    }
}
