using Kandid.Core.db;

namespace Kandid.Core
{
    public class KandidApplication
    {
        public static void Main(string[] args)
        {
            KandidDatabase.StartDatabase();
        }
    }
}
