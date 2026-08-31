import { videos } from "@/data/videos"
import { getYoutubeMetadata } from "@/lib/youtube"
import { notFound } from "next/navigation"
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io";

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function VideoPage({
  params,
}: Props) {
  const { id } = await params

  const video = videos.find(
    (video) => video.id === id
  )

  if (!video) {
    notFound()
  }

  const metadata = await getYoutubeMetadata(
    video.url
  )
  
  const relatedVideos = videos.filter(
  (item) =>
    item.id !== video.id &&
    item.category === video.category
);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-20">

        <img
          src={metadata.thumbnail_url}
          alt={metadata.title}
          className="
          aspect-video
          w-1/2
          rounded-md
          object-cover
          "
        />

        <div className="mt-4">

          <p className="text-sm text-[#8E8E8E]">
            {video.category}
          </p>

          <h1 className="mt-3 text-xl font-semibold">
            {metadata.title}
          </h1>

          <p className="mt-2 text-zinc-400">
            {metadata.author_name}
          </p>

          <div className="flex items-center gap-2 mt-6">
            <IoLogoYoutube className="text-red-500" />
          <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="
          inline-flex
          uppercase
          text-sm
          hover:underline
          underline-offset-4
          "
        >
          Watch on YouTube →
        </a>
          </div>

        </div>

        <section className="mt-6">

          <h2 className="text-lg">
            Why Watch
          </h2>

          <p
            className="
            max-w-2xl
            text-zinc-400
            leading-8
            "
          >
            {video.whyWatch}
          </p>

        </section>

        <section className="mt-6">

          <h2 className="text-lg">
            Tags
          </h2>

          <div className="mt-2 flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="
                rounded-md
                border
                border-zinc-800
                px-3
                py-1
                text-sm
                text-zinc-400
                "
              >
                {tag}
              </span>
            ))}
          </div>

        </section>

        <section className="mt-6">

          <h2 className="text-xl">
            Key Takeaways
          </h2>

          <ul className="mt-2 space-y-1">
            {video.takeaways.map(
              (takeaway) => (
                <li
                  key={takeaway}
                  className="text-zinc-400"
                >
                  • {takeaway}
                </li>
              )
            )}
          </ul>

        </section>

        <section className="mt-10">
  <h2 className="text-xl mb-4">
    Related Videos
  </h2>

 <div className="grid gap-6 md:grid-cols-2">
  {relatedVideos.map((related) => {
    const videoId =
      new URL(related.url)
        .searchParams.get("v");

    const thumbnail =
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
      <Link
        key={related.id}
        href={`/video/${related.id}`}
        className="
          overflow-hidden
          rounded-md
          border
          border-zinc-800
          transition
          hover:bg-zinc-900
        "
      >
        <img
          src={thumbnail}
          alt={related.id}
          className="
            aspect-video
            w-full
            object-cover
          "
        />

        <div className="p-2">
          <p className="text-sm text-[#8E8E8E]">
            {related.category}
          </p>

          <h3 className="mt-0">
            {related.id
              .replaceAll("-", " ")
              .replace(
                /\b\w/g,
                (char) =>
                  char.toUpperCase()
              )}
          </h3>
        </div>
      </Link>
    );
  })}
</div>
</section>

        

      </div>
    </main>
  )
}