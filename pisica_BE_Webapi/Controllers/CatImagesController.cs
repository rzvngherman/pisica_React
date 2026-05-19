using Microsoft.AspNetCore.Mvc;

namespace WebApplication4_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatImagesController : ControllerBase
    {
        private readonly ILogger<CatImagesController> _logger;

        public CatImagesController(ILogger<CatImagesController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// '/api/CatImages'
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<GetAllImagesResponse>> GetAllImages()
        //public IActionResult GetAllImages()
        {
            var imagesRoot = Path.Combine(Directory.GetCurrentDirectory(), "Images");

            if (!Directory.Exists(imagesRoot))
                return Ok(Array.Empty<string>());

            var baseUrl = $"{Request.Scheme}://{Request.Host}";

            var imageUrls = Directory
            .GetDirectories(imagesRoot) // 2025, 2026
            .SelectMany(dir => Directory.GetFiles(dir))
            .Select(file =>
            {
                var f = new FileInfo(file);
                var creationTime = f.CreationTime;
                var year = Path.GetFileName(Path.GetDirectoryName(file));
                var fileName = Path.GetFileName(file);

                var guidname = Guid.NewGuid().ToString();
                var id = guidname.Replace("-", "");

                return new GetAllImagesResponse
                {
                    CatIdd = id,
                    Name = fileName,
                    Url = $"{baseUrl}/DirectoryImages/{year}/{fileName}",
                    CreationTime = creationTime,
                };
                //return $"{baseUrl}/DirectoryImages/{year}/{fileName}";
            })
            .ToList();

            return Ok(imageUrls);
        }
    }

    public class GetAllImagesResponse
    {
        public string CatIdd { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public DateTime CreationTime { get; set; }
    }
}
