using ChallengeN5.API.Data;
using ChallengeN5.API.Repositories;
using ChallengeN5.API.Repositories.Implement;
using ChallengeN5.API.Services;
using ChallengeN5.API.Services.Implement;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ChallengeN5APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ChallengeN5APIContext") ?? throw new InvalidOperationException("Connection string 'ChallengeN5APIContext' not found.")));
string MyAllowSpecificOrigins = "_MyAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          //policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                          policy.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost").AllowAnyHeader().AllowAnyMethod();
                      });
});
// Add services to the container.
builder.Services.AddScoped<IPermissionRepository, PermissionRepository>();
builder.Services.AddScoped<IPermissionService, PermissionService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
