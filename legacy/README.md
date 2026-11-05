# DatDev Mobile — HTML / CSS / JavaScript Prototype

**Bản thiết kế tương tác cho website bán điện thoại DatDev Mobile**, phát triển từ bộ mockup NÉO MOBILE theo phong cách editorial technology: graphite/ivory/electric-lime.

## Chạy ngay

Không cần `npm install`, không cần backend. Mở `index.html` bằng trình duyệt hoặc chạy local server (khuyến nghị):

```bash
cd datdev-mobile
python3 -m http.server 5500
```

Truy cập **http://localhost:5500** và điều hướng bằng menu. Trang Admin demo: **http://localhost:5500/#/admin**.

## Cấu trúc thư mục

```text
datdev-mobile/
├── index.html              # HTML entry / SEO
├── styles.css              # Tokens, desktop, tablet, mobile, reduced-motion
├── data.js                 # Danh mục sản phẩm mẫu
├── app.js                  # UI, hash router, state, sự kiện, demo CRUD
├── assets/                 # Ảnh WebP xử lý từ mockup
├── preview-desktop.png     # Trang chủ desktop
├── preview-mobile.png      # Trang chủ mobile
├── preview-admin.png       # Admin
├── README.md
└── NEXTJS_MIGRATION.md
```

## Trang và luồng đã có

| Nhóm | Route | Trạng thái |
|---|---|---|
| Shopping | `#/` | Trang chủ |
| Shopping | `#/dien-thoai` | Danh sách / bộ lọc / sắp xếp |
| Shopping | `#/phu-kien` | Trang thông báo placeholder, chưa có dữ liệu phụ kiện |
| Shopping | `#/tim-kiem?q=iphone` | Tìm kiếm tên sản phẩm |
| Shopping | `#/san-pham/iphone-16-pro` | Chi tiết / chọn dung lượng / thêm giỏ |
| Shopping | `#/so-sanh` | So sánh tối đa 3 máy |
| Shopping | `#/uu-dai` | Danh mục khuyến mãi mẫu |
| Services | `#/thu-cu-doi-moi` | Ước tính thu cũ minh họa |
| Services | `#/tra-gop` | Máy tính trả góp minh họa |
| Order | `#/gio-hang` | Giỏ / tăng giảm số lượng / voucher demo DATDEV100 |
| Order | `#/thanh-toan` | Checkout không tạo thanh toán thật |
| Order | `#/dat-hang-thanh-cong` | Xác nhận đơn demo |
| Order | `#/tra-cuu` | Tra cứu đơn đã lưu trên trình duyệt |
| Account | `#/dang-nhap` | UI đăng nhập giả lập |
| Account | `#/tai-khoan` | Account overview mẫu |
| Account | `#/don-hang` | Lịch sử đơn demo |
| Account | `#/yeu-thich` | Yêu thích trên trình duyệt |
| Content | `#/bao-hanh` | Form tra cứu demo |
| Content | `#/cua-hang` | Danh sách cửa hàng demo, không phải địa chỉ thật |
| Content | `#/ho-tro` | FAQ / form hỗ trợ mô phỏng |
| Content | `#/cam-nang` | Danh mục bài viết |
| Content | `#/bai-viet/cach-chon-dien-thoai` | Bài viết demo |
| Admin | `#/admin` | Dashboard thống kê demo |
| Admin | `#/admin/san-pham` | CRUD sản phẩm mẫu (lưu localStorage) |
| Admin | `#/admin/kho` | Điều chỉnh tồn kho mẫu |
| Admin | `#/admin/don-hang` | Cập nhật trạng thái đơn demo |
| Admin | `#/admin/khuyen-mai` | Màn hình chiến dịch mẫu |
| Admin | `#/admin/bao-cao` | Biểu đồ minh họa và CSV |

## Tính năng đang hoạt động

- Responsive desktop / tablet / mobile.
- Hash router không cần cấu hình server rewrite.
- Thêm/xóa yêu thích, so sánh, giỏ hàng; voucher `DATDEV100`.
- Tạo đơn hàng demo; lưu `localStorage` trong trình duyệt hiện tại.
- Admin tạo sản phẩm, chỉnh giá/tồn kho, đổi trạng thái đơn; tất cả chỉ lưu cục bộ.
- Filter/sort sản phẩm, search, tính thử trả góp, ước tính thu cũ.
- CSS hỗ trợ `prefers-reduced-motion`.

## Giới hạn cần biết

- **Không phải sản phẩm bán hàng thật:** không tích hợp API, kho thật, đơn thật, đăng nhập thật, thanh toán, vận chuyển hay gửi email.
- **Dữ liệu minh họa:** giá, tên mẫu máy, thông số, chi nhánh, chương trình khuyến mãi, chính sách có thể không chính xác; phải xác minh trước khi đưa vào sản phẩm thương mại.
- **Thiết kế lấy cảm hứng từ mockup ảnh:** không thể tuyên bố pixel-perfect 100% so với một bản render ảnh thiếu file Figma, layers và asset gốc.
- **Hình ảnh sản phẩm:** là tài nguyên cắt/chỉnh từ mockup phục vụ demo, không phải ảnh sản phẩm bản quyền chính thức. Khi bán thật, thay bằng ảnh do cửa hàng sở hữu hoặc có quyền sử dụng.
- Tài khoản, địa chỉ, thông tin test đặt mua trong localStorage chỉ phục vụ thử nghiệm; **không đưa thông tin cá nhân thật** vào demo.
- Phiên bản HTML demo dùng Google Fonts qua internet; có font fallback nếu offline.

## Khi chuyển Next.js

Xem [`NEXTJS_MIGRATION.md`](NEXTJS_MIGRATION.md). Nên tách components, chuyển page sang App Router và lưu dữ liệu bằng backend/database.
