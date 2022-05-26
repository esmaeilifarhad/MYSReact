

using ApplicationLayer.Services.Duty;
using ApplicationLayer.Services.MasterData;
using ApplicationLayer.Services.Menu;
using ApplicationLayer.Services.RepeatTask;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace ApplicationLayer
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddScoped<IDutyService, DutyService>();
            services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<IMasterDataService,MasterDataService>();
            services.AddScoped<IRepeatTaskService, RepeatTaskService>();
            return services;
        }
    }
}
