# smart-garden-server

## Giới thiệu

**smart-garden-server** là một ứng dụng backend được xây dựng bằng Node.js, giúp quản lý và điều khiển hệ thống vườn thông minh. Dự án sử dụng MQTT để giao tiếp với các thiết bị IoT, MySQL để lưu trữ dữ liệu cảm biến, và Socket.IO để gửi dữ liệu thời gian thực đến ứng dụng khách.

---

## Tính năng

- **Quản lý dữ liệu cảm biến**:

  - Lưu trữ dữ liệu cảm biến (nhiệt độ, độ ẩm, độ ẩm đất) vào cơ sở dữ liệu MySQL.
  - Cung cấp API để lấy lịch sử dữ liệu cảm biến.

- **Điều khiển thiết bị IoT**:

  - Gửi lệnh điều khiển (bật/tắt) đến các thiết bị IoT thông qua giao thức MQTT.
  - Hỗ trợ điều khiển qua REST API và WebSocket.

- **Cập nhật dữ liệu thời gian thực**:

  - Gửi dữ liệu cảm biến mới nhất đến ứng dụng khách (client) thông qua WebSocket.

- **Kết nối MQTT**:
  - Tích hợp với HiveMQ Cloud để nhận dữ liệu cảm biến và gửi lệnh điều khiển.

---

## Cách khởi động server

### 1. Cài đặt các phụ thuộc

Đảm bảo bạn đã cài đặt **Node.js** và **npm** trên máy tính của mình. Sau đó, chạy lệnh sau để cài đặt các phụ thuộc:

```bash
npm install
```

### 2. Cấu hình môi trường

Tạo file .env trong thư mục gốc của dự án để lưu trữ các biến môi trường cần thiết.

### 3. Khởi động server

```bash
npm run start
```
