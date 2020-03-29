using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Owner> Owner { get; set; }
        public DbSet<Account> Account { get; set; }
        // public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options) { }
    }
}