export type GameDay = {
  games: Game[]
  date: string
  key?: string
}

export type Game = {
  homeTeam: Team
  awayTeam: Team
  startDate: string
}

export type Team = {
  name: string
  externalId: string
}
