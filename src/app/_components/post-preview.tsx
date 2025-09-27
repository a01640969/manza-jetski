import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg group">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-3xl mb-3 leading-snug font-semibold">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-base leading-relaxed text-white/90 max-h-32 overflow-hidden">
          {excerpt}
        </p>
      </div>
    </div>
  );
}
