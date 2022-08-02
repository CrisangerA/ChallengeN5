using ChallengeN5.API.Repositories;
using ChallengeN5.BL.Model;

namespace ChallengeN5.API.Services.Implement
{
    public class PermissionService : GenericService<Permission>, IPermissionService
    {
        private readonly IPermissionRepository _permissionRepository;        

        public PermissionService(IPermissionRepository permissionRepository) : base(permissionRepository)
        {
            this._permissionRepository = permissionRepository;
        }
    }
}
