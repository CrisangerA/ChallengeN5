namespace ChallengeN5.API.Repositories
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        Task<TEntity> GetById(int id);
        Task<List<TEntity>> GetAll();
        Task<TEntity> Create(TEntity entity);
        Task<TEntity> Update(TEntity entity);
    }
}
