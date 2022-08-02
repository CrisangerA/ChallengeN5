using System.ComponentModel.DataAnnotations;

namespace ChallengeN5.API.Model
{
    public class PermissionType
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Permission> Permission { get; set; }
    }
}
