using ApplicationLayer.Dto.Common;
using ApplicationLayer.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.MasterData
{
    public class MasterDataService : IMasterDataService
    {
        public IMasterDataRepository _masterDataRepository { get; }
        public MasterDataService(IMasterDataRepository masterDataRepository)
        {
            _masterDataRepository = masterDataRepository;
        }

      

        public async Task<List<SeleltDto>> lstMasterData()
        {
           var data=await _masterDataRepository.GetAll();
            return data.ToList().Select(q => new SeleltDto { Value=q.Id,Label=q.Title }).ToList();
        }

        public Task<List<SeleltDto>> lstMasterData2()
        {
            throw new NotImplementedException();
        }
    }
}
