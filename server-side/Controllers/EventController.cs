using API.Data;
using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EventController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEvent()
        {
            var events = await _context.Events.ToListAsync();
            return Ok(events);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent(EventDto dto)
        {
            var e = new Event
            {
                Name = dto.Name,
                Description = dto.Description,
                Type = dto.Type,
                Date = dto.Date
            };

            await _context.Events.AddAsync(e);
            _context.SaveChanges();

            return Ok(e);
        }
    }
}
