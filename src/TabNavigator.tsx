import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Calendar from './screens/Calendar'
import MyTeam from './screens/MyTeam'
import React from 'react'

const TabNavigator = createBottomTabNavigator({
  Calendar: Calendar,
  MyTeam: {
    screen: MyTeam,
    navigationOptions: {
      title: 'My Team'
    }
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const color = focused ? '#5b5b5b' : '#a0a0a0'
      if (navigation.state.routeName === 'Calendar') {
        return <CommunityIcon name='calendar' size={25} color={color}/>
      }

      return <Icon name='person' size={25} color={color}/>
    }
  })
})

export default createAppContainer(TabNavigator)
