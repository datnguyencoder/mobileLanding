import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getPost, posts } from "@/data/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Bài viết" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <div className="container article-body section">
      <Breadcrumbs current={post.title} parents={[["Cẩm nang", "/cam-nang"]]} />
      <span className="eyebrow">{post.tag}</span>
      <h1 style={{ marginTop: 12 }}>{post.title}</h1>
      <p className="muted">{post.date}</p>
      <p>{post.desc}</p>
      <p>
        Nội dung bài viết demo phục vụ layout editorial. Khi production, thay bằng
        CMS / MDX và hình ảnh có bản quyền.
      </p>
    </div>
  );
}
