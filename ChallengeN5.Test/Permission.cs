using ChallengeN5.API.Model;
using ChallengeN5.API.Services;

namespace ChallengeN5.Test
{
    [TestClass]
    public class Permission
    {
        
        IPermissionService permissionService;
        public Permission(IPermissionService service)
        {
            permissionService = service;
        }
        [TestMethod]
        public async Task Request()
        {
            var permission = await permissionService.GetAll();
            Assert.AreEqual(new List<API.Model.Permission>(), permission);
        }
        [TestMethod]
        public async Task Create(BL.Model.Permission permission)
        {
            var data = await permissionService.Create(permission);
            Assert.AreEqual(permission, data);
        }
        [TestMethod]
        public async Task Update(BL.Model.Permission permission)
        {
            var data = await permissionService.Update(permission);
            Assert.AreEqual(permission, data);
        }
    }
}