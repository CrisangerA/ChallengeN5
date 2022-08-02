namespace ChallengeN5.API.Services
{
    public interface IGenericService<TEntity> where TEntity : class
    {
        Task<TEntity> GetById(int id);
        Task<List<TEntity>> GetAll();
        Task<TEntity> Create(TEntity entity);
        Task<TEntity> Update(TEntity entity);
    }
}
