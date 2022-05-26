using ManageYourSelf.Models;
using Microsoft.AspNetCore.Mvc;

namespace ManageYourSelf.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DutyController : Controller
    {
        public _8719_manageyourselfContext _context { get; }
        public DutyController(Models._8719_manageyourselfContext context)
        {
            _context = context;
        }

       

        [HttpGet]
        public IActionResult Get()
        {
           var data= _context.Duties.ToList();
            return Ok(data);
        }
    }
}
