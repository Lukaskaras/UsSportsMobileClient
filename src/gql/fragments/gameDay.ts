import gql from 'graphql-tag'

export default gql`
  fragment GameDayFragment on GameDay {
    games {
      startDate
      homeTeam {
        name
        externalId
      }
      awayTeam {
        name
        externalId
      }
    }
    date
  }
`
