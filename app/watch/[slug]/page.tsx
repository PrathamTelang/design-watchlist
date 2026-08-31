import { resources } from "@/data/resources"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ResourcePage({
  params,
}: Props) {
  const { slug } = await params

  const resource = resources.find(
    (item) => item.slug === slug
  )

  if (!resource) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">

        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="
          aspect-video
          w-full
          rounded-2xl
          object-cover
          "
        />

        <div className="mt-10">

          <h1 className="text-5xl font-light">
            {resource.title}
          </h1>

          <p className="mt-4 text-zinc-500">
            {resource.creator}
          </p>

          <div className="mt-6 flex gap-3 text-sm text-zinc-400">
            <span>{resource.duration}</span>
            <span>•</span>
            <span>{resource.type}</span>
          </div>

        </div>

        <section className="mt-16">

          <h2 className="text-xl">
            Why Watch
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-8">
            {resource.whyWatch}
          </p>

        </section>

        <section className="mt-16">

          <h2 className="text-xl">
            Key Takeaways
          </h2>

          <ul className="mt-6 space-y-4">
            {resource.takeaways.map(
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

        <a
          href={resource.url}
          target="_blank"
          className="
          mt-16
          inline-flex
          rounded-full
          border
          border-zinc-800
          px-6
          py-3

          hover:border-zinc-600
          "
        >
          Watch Resource →
        </a>

      </div>
    </main>
  )
}