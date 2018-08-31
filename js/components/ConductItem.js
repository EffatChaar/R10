import React, { Component } from 'react'
import { View, Text, Animated, TouchableOpacity, LayoutAnimation } from 'react-native'
import styls from '../screens/About/styles'


class ConductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
          expand: false
        }
    }
// this code is from https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

    _toggleText() {
        let start = this.state.expand ? this.state.maxHeight : 0,
            end = this.state.expand ? 0 : this.state.maxHeight
    
        this.setState({
          expand: !this.state.expand
        })
    
        this.state.animation.setValue(start)
        Animated.timing(this.state.animation, { toValue: end }).start()
    }
    
    _setMaxHeight(event) {
        if (
          this.state.maxHeight === undefined ||
          event.nativeEvent.layout.height > this.state.maxHeight
        ) {
          this.setState({
            maxHeight: event.nativeEvent.layout.height
          })
        }
        if (!this.state.animation)
          this.setState({ animation: new Animated.Value(0) })
    }

    render() {
        return (
            <View >
                <TouchableOpacity
                    onPress= {this._toggleText.bind(this)} >
                    <View>
                        <Animated.Text>
                        {this.state.expand ? '-' : '+'}
                        </Animated.Text>
                        <Text style= {styles.sessionHeader}> {this.props.conduct.title} </Text>
                    </View>
                </TouchableOpacity>
                <Animated.View style={{ height: this.state.animation}}>
                    <View onLayout={this._setMaxHeight.bind(this)}>
                        <Text style={{ overflow:'hidden' }}> {this.props.conduct.description} </Text>
                    </View>
                </Animated.View>
            </View>
        )
    }
}



export default ConductItem