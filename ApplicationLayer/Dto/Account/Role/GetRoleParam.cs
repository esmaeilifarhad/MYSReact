using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Account.Role
{
   public class GetRoleParam : Pagination.paginationParam
    {
        public IEnumerable<Domains.IdentityDomains.RoleApplication> Roles { get; set; }
    }
}
