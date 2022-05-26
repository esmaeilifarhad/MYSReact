using ApplicationLayer.Dto.RepeatTask;
using Domains.RepeatTask;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.RepeatTask
{
  public  interface IRepeatTaskRepository : IRepositoryGeneric<Domains.RepeatTask.RepeatTask>
    {
        Task<IEnumerable<GetListRepeatTaskIsExecutedDto>> GetRepeatTasks(TypeTask typeTask);

        Task<int> InsertToRepeatTaskDetails(RepeatTaskDetailsDto param);
        Task<List<GetRTaskExecutedDto>> GetRTaskExecuted(TypeTask typeTask);
        Task<List<RepeatTaskDetail>> lstRepeatTaskDetailByWhere(TypeTask typeTask);
    }
}
