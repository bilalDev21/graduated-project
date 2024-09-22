using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RequestDto
    {
        public int UserId { get; set; }

        public int EventId { get; set; }

        [MaxLength(20)]
        public string Status { get; set; }
    }
}
