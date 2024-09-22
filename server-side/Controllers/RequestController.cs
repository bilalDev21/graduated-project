using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RequestController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateRequest(RequestDto dto)
        {
            var status = string.IsNullOrEmpty(dto.Status) ? "In Progress" : dto.Status;

            var request = new Request { UserId = dto.UserId, EventId = dto.EventId, Status = status };

            await _context.Requests.AddAsync(request);
            _context.SaveChanges();

            return Ok(request);
        }
    }
}
