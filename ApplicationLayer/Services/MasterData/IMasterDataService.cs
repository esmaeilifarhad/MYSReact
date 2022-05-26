using ApplicationLayer.Dto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.MasterData
{
    public interface IMasterDataService
    {
        Task<List<SeleltDto>> lstMasterData();
        Task<List<SeleltDto>> lstMasterData2();
    }
}
