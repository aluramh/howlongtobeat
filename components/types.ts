type TimeLabel = [string, string]

export type Game = {
  id: string
  name: string
  description: string
  platforms: string[]
  imageUrl: string
  timeLabels: TimeLabel[]
  gameplayMain: number
  gameplayMainExtra: number
  gameplayCompletionist: number
  similarity: number
  playableOn: string[]
}
