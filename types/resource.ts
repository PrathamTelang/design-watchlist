export type Resource = {
  id: string
  title: string
  creator: string
  thumbnail: string

  duration: string

  type:
    | "Talk"
    | "Documentary"
    | "Interview"
    | "Podcast"

  category: string

  whyWatch: string

  takeaways: string[]

  url: string
}