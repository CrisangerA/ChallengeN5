using System.ComponentModel.DataAnnotations;

namespace ChallengeN5.API.Model
{
    public class Permission
    {
        [Key]
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeLastName { get; set; }
        public System.DateTime PermissionDate { get; set; }
        public int PermissionTypeId { get; set; }

        public virtual PermissionType PermissionType { get; set; }
    }
}
