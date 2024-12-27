FROM node:10 as ember_app

COPY /src/ember-app /ember-app

WORKDIR /ember-app

RUN \
  set -x; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  ember build --environment=docker

FROM mcr.microsoft.com/dotnet/sdk:7.0 as backend

COPY /src/Happy_New_Year /Happy_New_Year

WORKDIR /Happy_New_Year

RUN \
 dotnet restore Happy_New_Year.sln;\
 dotnet build Happy_New_Year.sln -c Release;\
 dotnet publish ODataBackend/Happy_New_Year.ODataBackend.csproj -c Release -o out -f net7.0

FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app

COPY --from=backend /Happy_New_Year/out ./
COPY --from=ember_app /ember-app/dist ./wwwroot/

# Check webapi responses
HEALTHCHECK --interval=60s --timeout=15s --start-period=20s \
  CMD curl -f "http://0.0.0.0/health" || exit

ENTRYPOINT ["dotnet", "Happy_New_Year.ODataBackend.dll"]
