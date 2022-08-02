using ChallengeN5.API.Repositories;

namespace ChallengeN5.API.Services.Implement
{
    public class GenericService<TEntity> : IGenericService<TEntity> where TEntity : class
    {
        private readonly IGenericRepository<TEntity> _repository;
        public GenericService(IGenericRepository<TEntity> repository)
        {
            this._repository = repository;
        }
        public async Task<TEntity> Create(TEntity entity)
        {
            return await _repository.Create(entity);
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            return await _repository.Update(entity);
        }
    }
}
