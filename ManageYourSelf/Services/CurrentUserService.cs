using ApplicationLayer.IRepository;
using System.Security.Claims;

namespace ManageYourSelf.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        /// <summary>
        /// constructor of Current User Service class
        /// </summary>
        /// <param name="httpContextAccessor"></param>
        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        /// <summary>
        /// The Current User Id 
        /// </summary>
        public string UserId => _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);


    }
}
