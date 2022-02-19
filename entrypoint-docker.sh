echo "waiting docker container database"
dockerize -wait tcp://main-db:3306 -timeout 20s 

echo "prisma db push start"
npm run prisma:dbpush:dev

echo "start server"
npm run start:docker:dev