using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.RepeatTask
{
   public class GetRepeatTaskParamDto : Pagination.paginationParam
    {
        public IEnumerable<Domains.RepeatTask.RepeatTask> Data { get; set; }

    }
}
