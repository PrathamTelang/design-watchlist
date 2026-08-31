import { resources } from "@/data/resources"
import ResourceCard from "./ResourceCard"

export default function ResourceGrid() {
  return (
    <div
      className="
      grid
      gap-6
      md:grid-cols-2
      lg:grid-cols-3
      "
    >
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
        />
      ))}
    </div>
  )
}