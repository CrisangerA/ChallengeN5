#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ChallengeN5.API/ChallengeN5.API.csproj", "ChallengeN5.API/"]
RUN dotnet restore "ChallengeN5.API/ChallengeN5.API.csproj"
COPY . .
WORKDIR "/src/ChallengeN5.API"
RUN dotnet build "ChallengeN5.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ChallengeN5.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ChallengeN5.API.dll"]