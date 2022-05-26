using ApplicationLayer.Dto.Common;
using ApplicationLayer.Dto.Duty;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Duty
{
    public interface  IDutyService
    {
        Task<CommonDto<Domains.Duty>> GetDutyExecuted(int skip,int take, string search);
        Task<Domains.Duty> GetDutyById(int id);
        Task<Domains.Duty> UpdateDuty(InputUpdateDutyDto duty);

        Task<Domains.Duty> CreateDuty(Domains.Duty duty);
        Task<IEnumerable<Domains.Duty>> GetDutyNotExecuted();
        Task<IEnumerable<Domains.Duty>> GetDutyExecutedToday();
        Task<IEnumerable<Domains.Duty>> GetAllDuty();
    }
}
