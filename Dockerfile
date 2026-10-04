FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
COPY apps/backend/package*.json apps/backend/
COPY apps/frontend/package*.json apps/frontend/
COPY packages/shared/package*.json packages/shared/
RUN npm install

COPY . .
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]