import { Resource } from "@/types/resource"

type Props = {
  resource: Resource
}

export default function ResourceCard({
  resource,
}: Props) {
  return (
    <article
      className="
      group
      rounded-xl
      border
      border-zinc-800
      overflow-hidden
      "
    >
      <div className="aspect-[4/3]">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="
          h-full
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-105
          "
        />
      </div>

      <div className="p-4">
        <h3
          className="
          text-sm
          font-medium
          "
        >
          {resource.title}
        </h3>

        <p
          className="
          mt-1
          text-xs
          text-zinc-500
          "
        >
          {resource.creator}
        </p>
      </div>
    </article>
  )
}