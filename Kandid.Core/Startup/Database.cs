using System;
using Npgsql;

namespace Kandid.Core.Startup
{
    public class Database
    {
        public static void StartDatabase()
        {
            var connection = "Host=localhost;Username=postgres;Password=admin;Database=Kandid";
            var con = new NpgsqlConnection(connection);
            con.Open();

            var sql = "SELECT version()";

            var cmd = new NpgsqlCommand(sql, con);

            var version = cmd.ExecuteScalar().ToString();
            Console.Out.WriteLine($"PostgreSQL version: {version}");
        }
    }
}