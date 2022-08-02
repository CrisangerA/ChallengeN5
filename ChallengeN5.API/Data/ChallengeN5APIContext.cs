using ChallengeN5.BL.Model;
using Microsoft.EntityFrameworkCore;

namespace ChallengeN5.API.Data
{
    public class ChallengeN5APIContext : DbContext
    {
        public ChallengeN5APIContext (DbContextOptions<ChallengeN5APIContext> options)
            : base(options)
        {
        }

        public DbSet<Permission> Permission { get; set; } = default!;
        public DbSet<PermissionType> Permissidon { get; set; } = default!;
    }
}
