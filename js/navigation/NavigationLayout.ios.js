import React from 'react'
import { Platform, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Schedule from '../screens/Schedule'
import Map from '../screens/Map'
import Faves from '../screens/Faves'
import About from '../screens/About'
import Session from '../screens/Session'
import Icon from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

const scheduleStack = createStackNavigator (
    {
        Schedule: {
        screen: Schedule
        },
        Session: {
            screen: Session
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
        },
        Session: {
            screen: Session
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
    

export default createBottomTabNavigator (
    {
        Schedule: scheduleStack,
        Map: mapStack,
        Faves: favesStack,
        About: aboutStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if ( routeName === 'Schedule') {
                    iconName = `ios-calendar`
                } else if ( routeName === 'Map') {
                    iconName = `ios-map`
                } else if ( routeName === 'Faves') {
                    iconName = `ios-heart${focused ? '' : '-empty'}`
                } else if ( routeName === 'About') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`
                }
                return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),

    
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#999999',
            labelStyle: {
                fontSize: 10,
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: "black"
            }
        }
    }
)