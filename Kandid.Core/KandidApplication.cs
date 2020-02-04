using Kandid.Core.Startup;

namespace Kandid.Core
{
    public class KandidApplication
    {
        public static void Main(string[] args)
        {
            Database.StartDatabase();
        }
    }
}
