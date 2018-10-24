using Api_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}

        public DbSet<Customer> CustomerTable {get; set;}
    }
}