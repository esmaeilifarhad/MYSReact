using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApplicationLayer.Exceptions
{
    public class DuplicateException : Exception
    {
        public IDictionary<string, string[]> Errors { get; }
        public DuplicateException()
            : base("There is another user with this credentials.")
        {
            Errors = new Dictionary<string, string[]>();
        }

       

    }
}
