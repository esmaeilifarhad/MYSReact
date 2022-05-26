using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.IRepository
{
    public interface ICurrentUserService
    {
        string UserId { get; }
    }
}
