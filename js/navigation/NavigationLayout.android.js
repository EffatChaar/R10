import React from 'react'
import { Platform, createDrawerNavigator, createStackNavigator, Text } from 'react-navigation'
import Schedule from '../screens/Schedule'
import Map from '../screens/Map'
import Faves from '../screens/Faves'
import About from '../screens/About'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

const scheduleStack = createStackNavigator (
    {
        Schedule: {
        screen: Schedule
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
)

const mapStack = createStackNavigator (
    {
        Map: {
        screen: Map
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
)
const favesStack = createStackNavigator (
    {
        Faves: {
        screen: Faves
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
)
const aboutStack = createStackNavigator (
    {
        About: {
        screen: About
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    }
)

const renderIcon = (iconName, tintColor) => {
    return <Ionicon name={iconName} size={25} color={tintColor} />
}

scheduleStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-calendar', tintColor)
}
mapStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-map', tintColor)
}
favesStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-heart', tintColor)
}
aboutStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-information-circle', tintColor)
}
    

export default createDrawerNavigator (
    {
        Schedule: scheduleStack,
        Map: mapStack,
        Faves: favesStack,
        About: aboutStack
    }
)