using System;
using Npgsql;

namespace Kandid.Core.db
{
    
    public class KandidDatabase
    {
        public static void StartDatabase()
        {
            try
            {
                var connection = "Host=localhost;Username=postgres;Password=admin;Database=kandid";
                var con = new NpgsqlConnection(connection);
                con.Open();

                var evolve = new Evolve.Evolve(con, Console.WriteLine)
                {
                    Locations = new[] { "db/migrations" },
                    IsEraseDisabled = true,
                };
                
                evolve.Migrate();
                Console.WriteLine("Migrated");
            }
            catch (Exception)
            {
                Console.WriteLine("Failed to Migrate");
                throw;
            }
        }
    }
}