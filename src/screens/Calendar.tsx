import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'
import getEarlyGamesQuery from '../gql/queries/getEarlyGamesQuery'
import { getFirstDayOfWeek } from '../utils/date'
import GamesList from '../components/GamesList'

const Calendar = () => {
  const firstDay = getFirstDayOfWeek()
  const [date, setDate] = useState(firstDay)
    const { loading, data } = useQuery(getEarlyGamesQuery, {
      variables: {
        weekStart: moment(date).format('YYYY-MM-DD')
      }
    })

  if (loading) {
    return <Text>Loading...</Text>
  }

  const handleForward = () => {
    setDate(moment(date).add(7, 'days').toDate())
  }

  const handleBack = () => {
    setDate(moment(date).subtract(7, 'days').toDate())
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name='arrow-back' size={30} />
        </TouchableOpacity>
        <Text style={styles.game}>
          {`${moment(date).format('MMM Do')} - ${moment(date).add(6, 'days').format('MMM Do')}`}
        </Text>
        <TouchableOpacity onPress={handleForward}>
          <Icon name='arrow-forward' size={30} />
        </TouchableOpacity>
      </View>
      <GamesList gameDays={data.getEarlyGamesInWeek} />
    </View>
    )
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 70,
    padding: 15,
    backgroundColor: '#ffffff',
    height: 'auto',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  game: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 20
  }
})

export default Calendar
