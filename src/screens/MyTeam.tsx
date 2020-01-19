import { Dimensions, Picker, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useQuery } from '@apollo/react-hooks'
import getAllTeamsQuery from '../gql/queries/getAllTeams'
import { Team } from '../Types'
import TeamSelector from './MyTeam/TeamSelector'
import AllGamesList from './MyTeam/AllGamesList'

const MyTeam = () => {
  const [favoriteTeam, setFavoriteTeam] = useState<Team | null>(null)

  useEffect(() => {
    AsyncStorage.getItem('favoriteTeam')
      .then((res) => {
        if (res) {
          setFavoriteTeam(JSON.parse(res))
        }
      })
  }, [])

  console.log('favorite team', favoriteTeam)

  if (!favoriteTeam) {
    return (
      <TeamSelector />
    )
  }

  return (
    <View style={{ marginTop: 70}}>
      <AllGamesList teamId={favoriteTeam?.externalId}/>
    </View>
  )
}

export default MyTeam
