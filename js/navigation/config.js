import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Header } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'


const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
      <LinearGradient
        colors= {['#cf392a', '#9963ea']}
        start= {{ x: 0.0, y: 1.0 }}
        end= {{ x: 1.0, y: 0.0 }}
        style= {[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
      />
      <Header {...props} />
    </View>
)

const MenuIcon = navigation => (
  <Icon
    name= {Platform.select({
      ios: 'ios-menu',
      android: 'md-menu'
    })}
    size= {28}
    onPress={() => navigation.openDrawer()}
    color= '#ffffff'
    style= {{ paddingLeft: 10 }}
  />
)


export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    headerTintColor: '#ffffff',
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: 'transparent'
    },
    headerTitleStyle: {
      fontFamily: Platform.select({
        ios: 'Montserrat',
        android: 'Montserrat-Regular'
      }),
      fontWeight: '600',
    },
    headerLeft: Platform.select({
      ios: '',
      android: MenuIcon(navigation)
    })
  })