import { Text } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import getAllEarlyGamesForTeamQuery from '../../gql/queries/getAllEarlyGamesForTeam'
import GamesList from '../../components/GamesList'

type Props = {
  teamId: string
}

const AllGamesList = ({ teamId }: Props) => {
  const { loading, data } = useQuery(getAllEarlyGamesForTeamQuery, {
    variables: {
      teamId
    }
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (data) {
    return (
      <GamesList gameDays={data.getAllEarlyGamesForTeam} />
    )
  }

  return null
}

export default AllGamesList
