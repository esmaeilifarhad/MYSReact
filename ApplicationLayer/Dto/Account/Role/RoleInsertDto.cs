using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ApplicationLayer.Dto.Account.Role
{
  public  class RoleInsertDto
    {
        [Required]
        public string Name { get; set; }
    }
}
