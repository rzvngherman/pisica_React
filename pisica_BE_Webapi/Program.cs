using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi;

namespace WebApplication4_WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var services = builder.Services;



            // Add DbContext
            //services.AddDbContext<ParkingDbContext>(options =>
            //    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddDirectoryBrowser();




            // Add Swagger services
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c =>
            {
                var isDev = builder.Environment.IsDevelopment();
                var ttt = isDev
                            ? "My API (Development)"
                            : "My API (PRD)";
                c.SwaggerDoc("v1", new OpenApiInfo { Title = ttt, Version = "v1" });
            });

            //add cors:
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp",
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:3000", "http://razvanghermanfront.runasp.net")
                              .AllowAnyHeader()
                              .AllowAnyMethod();
                    });
            });

            // Add controllers
            services.AddControllers();

            var app = builder.Build();

            app.UseMiddleware<ErrorHandlingMiddleware>();

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable Swagger UI
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API Va1");
                c.RoutePrefix = "";
            });


            // Enable endpoint routing
            app.UseRouting();

            app.UseCors("AllowReactApp");







            //        //app.UseStaticFiles();
            //        // https://{HOST}/DirectoryImages
            //        // will display 'wwwroot/images'

            ////        //http://localhost:5166/DirectoryImages/2025/picABC10.jpeg
            var x = builder.Environment;
            var fileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "images"));
            var requestPath = "/DirectoryImages";

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = fileProvider,
                RequestPath = requestPath
            });
            //app.UseDirectoryBrowser(new DirectoryBrowserOptions
            //{
            //    FileProvider = fileProvider,
            //    RequestPath = requestPath
            //});








            // Configure authentication and authorization
            //app.UseAuthentication();
            //app.UseAuthorization();

            //NO app.MapStaticAssets();

            // Map controllers
            app.MapControllers();

            app.Run();
        }
    }
}
