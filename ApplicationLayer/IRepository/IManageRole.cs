using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
   public interface IManageRole
    {
        Task<IEnumerable<Domains.IdentityDomains.RoleApplication>> GetRoles();
        Task<Domains.IdentityDomains.RoleApplication> AddRole(string name);
        Task DeleteRole(string id);
        Task<IdentityResult> EditRole(string id, string name);
    }
}
