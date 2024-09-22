﻿using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class TokenRequestDto
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}