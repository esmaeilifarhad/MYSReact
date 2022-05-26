using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Exceptions
{
    public class ForbiddenAccessException : Exception
    {
        public ForbiddenAccessException() : base() { }
    }
}
