using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Dto.Account
{
    public class UserDetail 
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Id { get; set; }
    }
}
