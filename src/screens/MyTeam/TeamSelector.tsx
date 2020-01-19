import { Dimensions, Picker, StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useQuery } from '@apollo/react-hooks'
import getAllTeamsQuery from '../../gql/queries/getAllTeams'
import { Team } from '../../Types'

const TeamSelector = () => {
  const [teamId, setTeamId] = useState()
  const { loading, data } = useQuery(getAllTeamsQuery)

  AsyncStorage.getItem('favoriteTeam')
    .then((res) => {
      console.log('rres', res)
    })

  const handlePress = async () => {
    const team = data.getAllTeams.find((t: Team) => t.externalId === teamId)
    await AsyncStorage.setItem('favoriteTeam', JSON.stringify(team))
  }

  if (loading) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.title}>Select your favorite team</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          selectedValue={teamId}
          style={{height: 150, width: 300  }}
          itemStyle={{ color: '#ffffff'}}
          onValueChange={(itemValue) =>
            setTeamId(itemValue)
          }>
          {data.getAllTeams.map((team: Team) => {
            return <Picker.Item key={team.externalId} label={team.name} value={team.externalId} />
          })}
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title='Confirm' onPress={handlePress} color='black' />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    maxHeight: 200,
    alignItems: 'center',
  },
  picker: {

  },
  title: {
    fontSize: 20,
    fontWeight: '800'
  },
  bar: {
    padding: 15,
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width
  },
  button: {
    marginTop: 60,
    backgroundColor: '#ffffff'
  }
})

export default TeamSelector
