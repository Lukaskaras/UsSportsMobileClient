import { gql } from 'apollo-boost'
import gameDayFragment from '../fragments/gameDay'

export default gql`
  query getEarlyGamesInWeek($weekStart: Date!) {
    getEarlyGamesInWeek(weekStart: $weekStart) {
      ...GameDayFragment
    }
  }
  ${gameDayFragment}
`
