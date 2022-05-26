using ApplicationLayer.Dto.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
   public interface IDutyRepository: IRepositoryGeneric<Domains.Duty>
    {
        Task<CommonDto<Domains.Duty>> GetDutyExecuted(int skip,int take, string search);
        Task<Domains.Duty> GetDutyById(int id);
        Task<List<Domains.Duty>> lstAllDutyByMasterData();
    }
}
