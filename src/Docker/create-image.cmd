docker build --no-cache -f SQL\Dockerfile.PostgreSql -t happy_new_year/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t happy_new_year/app ../..
