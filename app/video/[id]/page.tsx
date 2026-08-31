import { videos } from "@/data/videos"
import { getYoutubeMetadata } from "@/lib/youtube"
import { notFound } from "next/navigation"
import Link from "next/link";

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
      <div className="mx-auto max-w-4xl px-6 py-20">

        <img
          src={metadata.thumbnail_url}
          alt={metadata.title}
          className="
          aspect-video
          w-full
          rounded-2xl
          object-cover
          "
        />

        <div className="mt-10">

          <p className="text-sm text-zinc-500">
            {video.category}
          </p>

          <h1 className="mt-3 text-5xl font-light">
            {metadata.title}
          </h1>

          <p className="mt-4 text-zinc-400">
            {metadata.author_name}
          </p>

          <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="
          mt-4
          inline-flex
          rounded-full
          border
          border-zinc-800
          px-6
          py-3

          hover:border-zinc-600
          "
        >
          Watch on YouTube →
        </a>

        </div>

        <section className="mt-16">

          <h2 className="text-xl">
            Why Watch
          </h2>

          <p
            className="
            mt-4
            max-w-2xl
            text-zinc-400
            leading-8
            "
          >
            {video.whyWatch}
          </p>

        </section>

        <section className="mt-16">

          <h2 className="text-xl">
            Tags
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="
                rounded-full
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

        <section className="mt-16">

          <h2 className="text-xl">
            Key Takeaways
          </h2>

          <ul className="mt-6 space-y-4">
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

        <section className="mt-20">
  <h2 className="text-xl mb-6">
    Related Videos
  </h2>

  <div className="space-y-4">
    {relatedVideos.map((related) => (
      <Link
        key={related.id}
        href={`/video/${related.id}`}
        className="
          block
          rounded-xl
          border
          border-zinc-800
          p-4
          transition

          hover:border-zinc-600
        "
      >
        <p className="text-sm text-zinc-500">
          {related.category}
        </p>

        <h3 className="mt-1">
          {related.id
            .replaceAll("-", " ")
            .replace(
              /\b\w/g,
              (char) => char.toUpperCase()
            )}
        </h3>
      </Link>
    ))}
  </div>
</section>

        

      </div>
    </main>
  )
}