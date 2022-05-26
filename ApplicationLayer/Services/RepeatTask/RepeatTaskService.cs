using ApplicationLayer.Dto.RepeatTask;
using ApplicationLayer.IRepository.RepeatTask;
using ApplicationLayer.Utility.DateTimeServices;
using Domains.RepeatTask;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.RepeatTask
{
    public class RepeatTaskService : IRepeatTaskService
    {
        public IRepeatTaskRepository _repeatTaskRepository { get; }
        public IRepeatTaskDetailRepository _repeatTaskDetailRepository { get; }

        public RepeatTaskService(IRepeatTaskRepository repeatTaskRepository, IRepeatTaskDetailRepository repeatTaskDetailRepository)
        {
            _repeatTaskRepository = repeatTaskRepository;
            _repeatTaskDetailRepository = repeatTaskDetailRepository;
        }
        public async Task<IEnumerable<GetListRepeatTaskIsExecutedDto>> GetRepeatTasks(TypeTask typeTask)
        {
            var today = DateTimeServices.Utl_Date_ConvertDateToSqlFormat(DateTimeServices.Utl_Date_shamsi_date());
            List<GetListRepeatTaskIsExecutedDto> lst = new List<GetListRepeatTaskIsExecutedDto>();

            if (TypeTask.dayly == typeTask)
            {
                var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(typeTask);
                var repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == typeTask);
                foreach (var item in repeatTasks)
                {
                    var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                    if (isExists == null)
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = false
                        };
                        lst.Add(dto);
                    }
                    else
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = true
                        };
                        lst.Add(dto);
                    }

                }

            }
            else if (TypeTask.weekly == typeTask)
            {
                var dateNow = DateTimeServices.Utl_Date_WeekDuration(DateTime.Now);
                var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(typeTask);

                var repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == TypeTask.weekly);

                foreach (var item in repeatTasks)
                {
                    var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                    if (isExists == null)
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = false
                        };
                        lst.Add(dto);
                    }
                    else
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = true
                        };
                        lst.Add(dto);
                    }

                }
            }
            else if (TypeTask.monthly == typeTask)
            {
                var yearmonth = today.Substring(0, 6);
                var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(typeTask);

                var repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == TypeTask.monthly, q => q.OrderBy(x => x.Title));

                foreach (var item in repeatTasks)
                {
                    var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                    if (isExists == null)
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = false
                        };
                        lst.Add(dto);
                    }
                    else
                    {
                        GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                        {
                            Id = item.Id,
                            Title = item.Title,
                            IsExecuted = true
                        };
                        lst.Add(dto);
                    }

                }
            }

            return lst;

        }

        public Task<List<Domains.RepeatTask.RepeatTask>> lstRepeatTask()
        {
            throw new NotImplementedException();
        }

        public async Task<int> InsertToRepeatTaskDetails(RepeatTaskDetailsDto param)
        {
            try
            {
                var today = DateTimeServices.Utl_Date_ConvertDateToSqlFormat(DateTimeServices.Utl_Date_shamsi_date());
                if (param.typeTask == TypeTask.dayly)
                {
                    var Details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(param.typeTask);// TableNoTrackingRepeatDetails.Where(q => q.Date == today && q.RepeatTask.TypeTask == TypeTask.dayly);
                    await _repeatTaskDetailRepository.DeleteRange(Details);
                    // _entitiesRepeatTaskDetail.RemoveRange(Details);
                    // await _dbContext.SaveChangesAsync();
                    var Hour = DateTime.Now.Hour;
                    if (Hour < 4)
                    {
                        today = DateTimeServices.Utl_Date_shamsi_NDays(today, -1);
                    }
                    foreach (var item in param.ids)
                    {
                        RepeatTaskDetail repeatTaskDetail = new RepeatTaskDetail()
                        {
                            RepeatTaskId = item,
                            Date = today
                        };
                        _repeatTaskDetailRepository.Add(repeatTaskDetail);
                        //await _entitiesRepeatTaskDetail.AddAsync(repeatTaskDetail);
                    }
                    return await _repeatTaskDetailRepository.SaveAsync();
                }
                if (param.typeTask == TypeTask.weekly)
                {
                    // var dateNow = DateTimeServices.Utl_Date_WeekDuration(DateTime.Now);
                    var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(param.typeTask);

                    await _repeatTaskDetailRepository.DeleteRange(details);

                    foreach (var item in param.ids)
                    {
                        RepeatTaskDetail repeatTaskDetail = new RepeatTaskDetail()
                        {
                            RepeatTaskId = item,
                            Date = today
                        };
                        _repeatTaskDetailRepository.Add(repeatTaskDetail);
                    }
                    return await _repeatTaskDetailRepository.SaveAsync();
                }
                if (param.typeTask == TypeTask.monthly)
                {
                    //var yearmonth = today.Substring(0, 6);
                    var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(param.typeTask);

                    await _repeatTaskDetailRepository.DeleteRange(details);

                    foreach (var item in param.ids)
                    {
                        RepeatTaskDetail repeatTaskDetail = new RepeatTaskDetail()
                        {
                            RepeatTaskId = item,
                            Date = today
                        };
                        _repeatTaskDetailRepository.Add(repeatTaskDetail);
                    }
                    return await _repeatTaskDetailRepository.SaveAsync();
                }
                return 0;
            }
            catch (Exception ex)
            {
                //return 0;
                throw ex;
            }


        }

        public async Task<IEnumerable<GetListRepeatTaskIsExecutedDto>> GetTasksAllType()
        {
            var today = DateTimeServices.Utl_Date_ConvertDateToSqlFormat(DateTimeServices.Utl_Date_shamsi_date());
            List<GetListRepeatTaskIsExecutedDto> lst = new List<GetListRepeatTaskIsExecutedDto>();


            var details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(TypeTask.dayly);
            var repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == 0);
            foreach (var item in repeatTasks)
            {
                var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                if (isExists == null)
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = false,
                        TypeTask = TypeTask.dayly,
                    };
                    lst.Add(dto);
                }
                else
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = true
                    };
                    lst.Add(dto);
                }

            }



            var dateNow = DateTimeServices.Utl_Date_WeekDuration(DateTime.Now);
            details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(TypeTask.weekly);

            repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == TypeTask.weekly);

            foreach (var item in repeatTasks)
            {
                var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                if (isExists == null)
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = false,
                        TypeTask = TypeTask.weekly,
                    };
                    lst.Add(dto);
                }
                else
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = true,
                        TypeTask = TypeTask.weekly,
                    };
                    lst.Add(dto);
                }

            }

            var yearmonth = today.Substring(0, 6);
            details = await _repeatTaskRepository.lstRepeatTaskDetailByWhere(TypeTask.monthly);

            repeatTasks = await _repeatTaskRepository.Get(q => q.TypeTask == TypeTask.monthly, q => q.OrderBy(x => x.Title));

            foreach (var item in repeatTasks)
            {
                var isExists = details.SingleOrDefault(q => q.RepeatTaskId == item.Id);
                if (isExists == null)
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = false,
                        TypeTask = TypeTask.monthly,
                    };
                    lst.Add(dto);
                }
                else
                {
                    GetListRepeatTaskIsExecutedDto dto = new GetListRepeatTaskIsExecutedDto()
                    {
                        Id = item.Id,
                        Title = item.Title,
                        IsExecuted = true,
                        TypeTask = TypeTask.monthly,
                    };
                    lst.Add(dto);
                }

            }


            return lst;
        }

        public async Task<Domains.RepeatTask.RepeatTask> CreateUpdate(Domains.RepeatTask.RepeatTask param)
        {
            //Domains.RepeatTask.RepeatTask = null;
            if (param.Id > 0)
            {
                var oldData= await _repeatTaskRepository.GetById(param.Id);
                oldData.Title= param.Title;
                oldData.TypeTask=param.TypeTask;
                oldData.Description=param.Description;
                return await _repeatTaskRepository.Update(oldData);
            }
            else
            
            {
                return await _repeatTaskRepository.Insert(param);
            }
        }
    }
}
