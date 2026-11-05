import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  Truck,
  Headset,
} from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/motion/Reveal";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ButtonLink } from "@/components/ui/Button";
import { assetPath, posts, products } from "@/data/catalog";
import { money } from "@/lib/format";
import "./hero.css";

const categories = [
  ["Apple", "phone-apple.webp", "/dien-thoai?brand=Apple"],
  ["Samsung", "phone-samsung.webp", "/dien-thoai?brand=Samsung"],
  ["Xiaomi", "phone-xiaomi.webp", "/dien-thoai?brand=Xiaomi"],
  ["Nothing", "phone-nothing.webp", "/dien-thoai?brand=Nothing"],
  ["Thu cũ đổi mới", "phone-apple-pink.webp", "/thu-cu-doi-moi"],
] as const;

const benefits = [
  [Truck, "Giao hàng minh họa", "Theo dõi trạng thái demo"],
  [ShieldCheck, "Bảo hành mô phỏng", "Form tra cứu demo"],
  [Package, "Đổi trả UI", "Không xử lý đơn thật"],
  [Headset, "Hỗ trợ 24/7 demo", "FAQ & form mô phỏng"],
] as const;

export function HomeView() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />

      <div className="container">
        <section className="section">
          <Reveal className="product-feature-grid" stagger>
            <div className="feature-copy" data-reveal-item>
              <span className="eyebrow">LỰA CHỌN NỔI BẬT</span>
              <h2>
                Những thiết bị
                <br />
                đáng trải nghiệm.
              </h2>
              <p className="muted">
                Khám phá điện thoại với mức giá demo và bộ lọc thông minh.
              </p>
              <Link className="text-link mt16" href="/dien-thoai">
                Xem toàn bộ sản phẩm <ArrowRight aria-hidden />
              </Link>
            </div>
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/san-pham/${p.id}`}
                className="feature-card"
                data-reveal-item
              >
                <span className="chip">{p.badge}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Image
                  src={assetPath(p.image)}
                  alt={p.name}
                  width={220}
                  height={220}
                />
                <strong>{money(p.price)}</strong>
              </Link>
            ))}
          </Reveal>
        </section>

        <section className="section-tight">
          <div className="section-head">
            <div>
              <span className="eyebrow">KHÁM PHÁ THEO NHU CẦU</span>
              <h2 style={{ marginTop: 10 }}>Chọn đúng cho bạn.</h2>
            </div>
          </div>
          <Reveal className="category-grid" stagger>
            {categories.map(([label, image, href]) => (
              <Link key={label} href={href} className="category-tile" data-reveal-item>
                <Image src={assetPath(image)} alt={label} width={160} height={116} />
                <div>
                  <span>{label}</span>
                  <div>
                    <ArrowRight aria-hidden />
                  </div>
                </div>
              </Link>
            ))}
          </Reveal>
          <div className="benefits">
            {benefits.map(([Icon, title, desc]) => (
              <div className="benefit" key={title}>
                <Icon aria-hidden size={34} />
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="eyebrow">ĐƯỢC QUAN TÂM</span>
              <h2 style={{ marginTop: 10 }}>Mua theo cách của bạn.</h2>
            </div>
            <Link className="text-link" href="/dien-thoai">
              Tất cả sản phẩm <ArrowRight aria-hidden />
            </Link>
          </div>
          <ProductGrid products={products.slice(0, 4)} />
        </section>

        <section className="section-tight">
          <div className="wide-banner">
            <div>
              <span className="eyebrow highlight">NÂNG CẤP THÔNG MINH</span>
              <h2>
                Đổi máy cũ.
                <br />
                <span className="highlight">Mở trải nghiệm mới.</span>
              </h2>
              <p className="muted" style={{ color: "#d2d2cf", marginBottom: 22 }}>
                Thử định giá thiết bị cũ trực tiếp trên website.
              </p>
              <ButtonLink href="/thu-cu-doi-moi">
                Thử định giá <ArrowRight aria-hidden />
              </ButtonLink>
            </div>
            <Image
              src={assetPath("hero-tradein.webp")}
              alt="Hình ảnh điện thoại thu cũ đổi mới"
              width={720}
              height={420}
            />
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="eyebrow">EDITORIAL / TECH JOURNAL</span>
              <h2 style={{ marginTop: 10 }}>Công nghệ qua góc nhìn mới.</h2>
            </div>
            <Link href="/cam-nang" className="text-link">
              Đọc cẩm nang <ArrowRight aria-hidden />
            </Link>
          </div>
          <Reveal className="article-grid" stagger>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/bai-viet/${post.slug}`}
                className="article-card"
                data-reveal-item
              >
                <Image
                  src={assetPath(post.image)}
                  alt=""
                  width={480}
                  height={230}
                />
                <div className="body">
                  <span className="eyebrow">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </section>
      </div>
    </>
  );
}
