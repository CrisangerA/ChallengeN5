global using Microsoft.VisualStudio.TestTools.UnitTesting;
using ChallengeN5.API.Data;
using ChallengeN5.API.Repositories;
using ChallengeN5.API.Repositories.Implement;
using ChallengeN5.API.Services;
using ChallengeN5.API.Services.Implement;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ChallengeN5APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ChallengeN5APIContext") ?? throw new InvalidOperationException("Connection string 'ChallengeN5APIContext' not found.")));
builder.Services.AddScoped<IPermissionRepository, PermissionRepository>();
builder.Services.AddScoped<IPermissionService, PermissionService>();