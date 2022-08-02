using ChallengeN5.API.Services;
using ChallengeN5.BL.Model;
using Microsoft.AspNetCore.Mvc;

namespace ChallengeN5.API.Controllers
{
    [Consumes("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PermissionsController : ControllerBase
    {
        private readonly IPermissionService _permissionService;

        public PermissionsController(IPermissionService permissionService)
        {
            _permissionService = permissionService;
        }

        // GET: api/Permissions
        [HttpGet("List")]
        public async Task<IActionResult> GetPermission()
        {
            var permission = await _permissionService.GetAll();
            return Ok(permission);
        }

        [HttpPut]
        public async Task<IActionResult> PutPermission(Permission permission)
        {
            return Ok(await _permissionService.Update(permission));
        }

        [HttpPost]
        public async Task<IActionResult> PostPermission(Permission permission)
        {
            return Ok(await _permissionService.Create(permission));
        }
    }
}
