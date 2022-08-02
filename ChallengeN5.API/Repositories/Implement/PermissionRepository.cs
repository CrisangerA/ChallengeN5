using ChallengeN5.API.Data;
using ChallengeN5.BL.Model;

namespace ChallengeN5.API.Repositories.Implement
{
    public class PermissionRepository : GenericRepository<Permission>, IPermissionRepository
    {
        public PermissionRepository(ChallengeN5APIContext context) : base(context)
        {

        }
    }
}
