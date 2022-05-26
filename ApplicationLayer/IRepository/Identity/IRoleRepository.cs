using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.Identity
{
   public interface IRoleRepository
    {
        Task<IEnumerable<Domains.IdentityDomains.RoleApplication>> GetAllRoles();
        Task<Domains.IdentityDomains.RoleApplication> FindRoleById(string roleId);
        Task<IdentityResult> CreateRole(Domains.IdentityDomains.RoleApplication  roleApplication);
        Task<IdentityResult> CreateUserRole(string userId,IEnumerable<string> roles);
    }
}
