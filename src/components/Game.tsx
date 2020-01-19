import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import React from 'react'
import { Game as GameType } from '../Types'

type Props = {
  game: GameType
  key: number | string
}

const Game = (props: Props) => {
  const { key, game } = props
  return (
    <>
      <View key={key} style={styles.gameBar}>
        <Text style={styles.gameText}>
          {`${moment(game.startDate).format('HH:mm')} ${game.awayTeam.name} @ ${game.homeTeam.name}`}
        </Text>
      </View>
      <View style={styles.divider}></View>
    </>
  )
}

const styles = StyleSheet.create({
  gameBar: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 20,
    backgroundColor: '#ffffff',
    height: 'auto',
    padding: 15
  },
  gameText: {
    fontFamily: 'Helvetica',
    fontSize: 12
  },
  divider: {
    height: 1,
    backgroundColor: '#b6b6b6'
  }
})

export default Game
