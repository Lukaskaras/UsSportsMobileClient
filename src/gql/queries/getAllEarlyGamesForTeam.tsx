import { gql } from 'apollo-boost'
import gameDayFragment from '../fragments/gameDay'

export default gql`
  query getAllEarlyGamesForTeam($teamId: String!) {
    getAllEarlyGamesForTeam(teamId: $teamId) {
      ...GameDayFragment
    }
  }
  ${gameDayFragment}
`
