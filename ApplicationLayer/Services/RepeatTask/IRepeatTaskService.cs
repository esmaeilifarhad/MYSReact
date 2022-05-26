using ApplicationLayer.Dto.RepeatTask;
using Domains.RepeatTask;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.RepeatTask
{
    public interface IRepeatTaskService
    {/// <summary>
     /// نمایش تمام عناوین وظایف تکراری
     /// </summary>
     /// <returns></returns>
        Task<List<Domains.RepeatTask.RepeatTask>> lstRepeatTask();
        /// <summary>
        /// نمایش وظایف با مشخص کردن نوع وظیفه
        /// </summary>
        /// <param name="typeTask"></param>
        /// <returns></returns>
        Task<IEnumerable<GetListRepeatTaskIsExecutedDto>> GetRepeatTasks(TypeTask typeTask);
        Task<IEnumerable<GetListRepeatTaskIsExecutedDto>> GetTasksAllType();
        Task<int> InsertToRepeatTaskDetails(RepeatTaskDetailsDto param);

        Task<Domains.RepeatTask.RepeatTask> CreateUpdate(Domains.RepeatTask.RepeatTask param);


    }
}
