# Sử dụng image node chính thức để build app
FROM node:18 AS build

WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào image
COPY . .

# Build ứng dụng React (sẽ tạo ra thư mục build)
RUN npm run build

# Sử dụng image nginx để serve static build
FROM nginx:alpine

# Copy file build vào thư mục nginx public
COPY --from=build /app/build /usr/share/nginx/html

# Copy file cấu hình nginx tùy chọn (nếu có)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Lệnh mặc định chạy nginx
CMD ["nginx", "-g", "daemon off;"]