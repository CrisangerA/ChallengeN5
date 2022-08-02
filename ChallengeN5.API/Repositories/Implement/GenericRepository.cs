using ChallengeN5.API.Data;
using Microsoft.EntityFrameworkCore;

namespace ChallengeN5.API.Repositories.Implement
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        //        private readonly ChallengeN5Entities _db;
        private readonly ChallengeN5APIContext _db;

        public GenericRepository(ChallengeN5APIContext db)
        {
            this._db = db;
        }

        public async Task<TEntity> Create(TEntity entity)
        {
            _db.Set<TEntity>().Add(entity);
            await _db.SaveChangesAsync();
            return entity;
        }

        public async Task<List<TEntity>> GetAll()
        {
            return await _db.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            TEntity entity = await _db.Set<TEntity>().FindAsync(id);
            if (entity == null) throw new Exception("Entity not found");
            return entity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            _db.Entry(entity).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return entity;
        }
    }
}
