using ApplicationLayer.Dto.Course.Planning;
using Domains.CourseTime;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.CourseTime
{
    public interface IPlanningRepository : IRepositoryGeneric<Domains.CourseTime.Planning>
    {
        Task CreatePlanning(Domains.CourseTime.Planning model);
        Task<List<Planning>> GetByCourseId(int courseId);
    }
}
