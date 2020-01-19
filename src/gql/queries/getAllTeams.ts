import { gql } from 'apollo-boost'

export default gql`
  query getAllTeams {
    getAllTeams {
      name
      externalId
    }
  }
`
