# Build React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production image
FROM node:18

WORKDIR /app

# Copy code và build từ stage trước
COPY --from=build /app /app

# Cài lại production dependencies nếu cần
RUN npm install --production

# Serve static React build từ Node server
# (giả sử server/index.js đã có code phục vụ static từ /build)
EXPOSE 5000

CMD ["node", "server/index.js"]