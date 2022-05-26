using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository
{
   public interface IlogRepository
    {
        Task Insert(Domains.Log.LogError logError);
    }

}
