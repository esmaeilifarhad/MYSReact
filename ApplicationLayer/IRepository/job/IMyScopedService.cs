using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.job
{
    public interface IMyScopedService
    {
        Task DoWork(CancellationToken cancellationToken);
    }
}
