using ApplicationLayer.Dto.Common;
using ApplicationLayer.Dto.Duty;
using ApplicationLayer.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Duty
{
    public class DutyService : IDutyService
    {
        public IDutyRepository _dutyRepository { get; }
        public DutyService(IDutyRepository dutyRepository)
        {
            _dutyRepository = dutyRepository;
        }
        public async Task<CommonDto<Domains.Duty>> GetDutyExecuted(int skip,int take,string search)
        {
           // var data =await _dutyRepository.GetDutyExecuted(skip, take, search);
           // var data2 = await _dutyRepository.GetPagination(q => q.Title.Contains(search),q=>q.OrderBy(x=>x.Rate),"",skip,take);
            if (search == null || search == "")
            {
               return await _dutyRepository.GetPagination(null, q => q.OrderByDescending(x => x.DateTaskIsExecute), "", skip, take);
            }
            else
            {
              return await _dutyRepository.GetPagination(q => q.Title.Contains(search), q => q.OrderByDescending(x => x.DateTaskIsExecute), "", skip, take);
            }
          //  return data;
        }

       public  async Task<Domains.Duty> GetDutyById(int id)
        {
           var data=await _dutyRepository.GetById(id);
            return data;
        }



        public async Task<Domains.Duty> CreateDuty(Domains.Duty newDuty)
        {
            var data = await _dutyRepository.Insert(newDuty);
            return data;
        }

        public async Task<IEnumerable<Domains.Duty>> GetDutyNotExecuted()
        {
            var data = await _dutyRepository.Get(q => q.IsExecuted == false, q => q.OrderBy(x => x.DateTaskIsExecute).ThenBy(x=>x.Rate), "");
            return data;
        }

        public async Task<IEnumerable<Domains.Duty>> GetDutyExecutedToday()
        {
            var xx = ApplicationLayer.Utility.DateTimeServices.DateTimeServices.Utl_Date_DayOfWeek(null, null);
            var data = await _dutyRepository.Get(q => (q.IsExecuted == true && q.DateTaskIsExecute.ToString()==ApplicationLayer.Utility.DateTimeServices.DateTimeServices.Utl_Date_DayOfWeek(null,null).ShamsyDateSlashless), q => q.OrderBy(x => x.DateTaskIsExecute).ThenBy(x => x.Rate), "");
            return data;
        }

        public async Task<Domains.Duty> UpdateDuty(InputUpdateDutyDto duty)
        {
            if (duty.type > 0)
            {
                List<Domains.Duty> lst = new List<Domains.Duty>();
                switch (duty.type)
                {
                    case 1:
                        foreach (var item in duty.checkedArray)
                        {
                            var old = await _dutyRepository.GetById(item);
                            old.DateTaskIsExecute =Int64.Parse(Utility.DateTimeServices.DateTimeServices.Utl_Date_DayOfWeek().ShamsyDateSlashless);
                            lst.Add(old);
                        }; break;
                        case 2:

                        foreach (var item in duty.checkedArray)
                        {
                            var old = await _dutyRepository.GetById(item);
                            old.IsExecuted = true;
                            lst.Add(old);
                        }; break;
                    case 3:

                        foreach (var item in duty.checkedArray)
                        {
                            var old = await _dutyRepository.GetById(item);
                            old.DateTaskIsExecute =Int64.Parse(Utility.DateTimeServices.DateTimeServices.Utl_Date_shamsi_NDays(
                                Utility.DateTimeServices.DateTimeServices.Utl_Date_shamsi_date(), 1));
                            lst.Add(old);
                        }; break;

                    case 4:

                        foreach (var item in duty.checkedArray)
                        {
                            var old = await _dutyRepository.GetById(item);
                            old.DateTaskIsExecute = duty.DateTaskIsExecute;
                            lst.Add(old);
                        }; break;
                    case 5:

                        foreach (var item in duty.checkedArray)
                        {
                            var old = await _dutyRepository.GetById(item);
                            old.IsExecuted = false;
                            lst.Add(old);
                        }; break;


                    default:
                        break;
                }
               
                
                await _dutyRepository.UpdateRange(lst);
                return null;
            }
            else
            {
                var data = await _dutyRepository.GetById(duty.Id);

                data.IsExecuted = data.IsExecuted;
                data.Rate = (duty.Rate==null?data.Rate:duty.Rate);
                data.Description= (duty.Description == null ? data.Description : duty.Description);
                data.Title = (duty.Title == null ? data.Title : duty.Title);
                data.DateTaskIsExecute = (duty.DateTaskIsExecute == 0 ? data.DateTaskIsExecute : duty.DateTaskIsExecute);
                data.MasterDataId= (duty.MasterDataId==0?data.MasterDataId:duty.MasterDataId);
                return await _dutyRepository.Update(data);
            }
        }

        public async Task<IEnumerable<Domains.Duty>> GetAllDuty()
        {
           // return await _dutyRepository.lstAllDutyByMasterData();
           return await _dutyRepository.Get(null, q => q.OrderBy(x => x.DateTaskIsExecute).OrderBy(x => x.Rate),"MasterData");
        }
    }
}
