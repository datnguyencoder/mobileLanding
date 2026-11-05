import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <strong>DatDev</strong>
              <span className="slash">/</span>
              <em>MOBILE</em>
            </Link>
            <p style={{ marginTop: 17, maxWidth: 260 }}>
              Công nghệ đúng chất bạn. Giao diện thương mại điện tử được thiết kế
              từ một bản sắc duy nhất.
            </p>
            <p>
              <span className="chip dark">DEMO UI/UX</span>
            </p>
          </div>
          <div>
            <h4>Khám phá</h4>
            <Link href="/dien-thoai">Điện thoại</Link>
            <Link href="/uu-dai">Ưu đãi</Link>
            <Link href="/so-sanh">So sánh sản phẩm</Link>
            <Link href="/cam-nang">Cẩm nang</Link>
          </div>
          <div>
            <h4>Dịch vụ</h4>
            <Link href="/thu-cu-doi-moi">Thu cũ đổi mới</Link>
            <Link href="/tra-gop">Trả góp</Link>
            <Link href="/bao-hanh">Bảo hành</Link>
            <Link href="/cua-hang">Cửa hàng</Link>
          </div>
          <div>
            <h4>Khách hàng</h4>
            <Link href="/tai-khoan">Tài khoản</Link>
            <Link href="/don-hang">Lịch sử đơn</Link>
            <Link href="/tra-cuu">Tra cứu đơn</Link>
            <Link href="/ho-tro">Trung tâm hỗ trợ</Link>
          </div>
          <div>
            <h4>Vận hành demo</h4>
            <Link href="/admin">Admin Dashboard</Link>
            <Link href="/admin/san-pham">Sản phẩm</Link>
            <Link href="/admin/don-hang">Đơn hàng</Link>
            <Link href="/admin/bao-cao">Báo cáo</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DatDev Mobile — prototype Next.js</span>
          <span>Dữ liệu minh họa · không phải cửa hàng thật</span>
        </div>
      </div>
    </footer>
  );
}
