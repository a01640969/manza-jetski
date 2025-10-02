import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <section className="relative">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="relative h-[100vh] min-h-[520px] flex items-center">
            <Image
              src={heroPost.coverImage}
              alt={`Imagen de portada para ${heroPost.title}`}
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/45" />
            
            <div className="relative z-10 w-full">
              <Container>
                <div className="flex flex-col items-center text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] py-20 md:items-start md:py-32">
                  <Intro className="mt-0 mb-0 text-white" />
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          showCover={false}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
