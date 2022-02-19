FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npm install -g prisma

RUN npm run prisma:generate:dev

COPY . .

RUN chmod +x entrypoint-docker.sh
ENTRYPOINT [ "sh", "/usr/src/app/entrypoint/.sh" ]

EXPOSE 3000