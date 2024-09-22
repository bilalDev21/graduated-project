using API.DTOs;
using API.Models;

namespace API.Interfaces
{
    public interface IAuthService
    {
        Task<Auth> RegisterAsync(Register model);
        Task<Auth> GetTokenAsync(TokenRequestDto model);
    }
}
