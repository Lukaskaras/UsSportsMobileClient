import { Dimensions, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import { GameDay } from '../Types'
import moment from 'moment'
import Game from './Game'
import React from 'react'

type Props = {
  gameDays: GameDay[]
}
const GamesList = ({ gameDays }: Props) => {
  return (
    <FlatList
      data={gameDays}
      renderItem={ (item: ListRenderItemInfo<GameDay>) => {
        if (!item.item.games.length) {
          return null
        }

        return (
          <View>
            <View style={ styles.bar }>
              <Text style={ styles.game }>
                { moment(item.item.date).format('YYYY-MM-DD') }
              </Text>
            </View>
            <View>
              { item.item.games.map((g, i) => <Game game={ g } key={ i }/>) }
            </View>
          </View>
        )
      } }
    />
  )
}

const styles = StyleSheet.create({
  bar: {
    padding: 15,
    marginVertical: 10,
    height: 'auto',
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width
  },
  game: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 20
  }
})

export default GamesList
