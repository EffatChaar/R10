import React, { Component, createContext } from 'react'
import { getFaves, addFav, removeFav } from '../../config/models'

const FavesContext = createContext()

class FavesProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favesIds: []
        }
    }

    getFavedSessionIds = () => {
        try{
            this.setState({ favesIds: getFaves() })
        } catch(error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getFavedSessionIds()
    }

    addFaveSession = (sessionId) => {
        try{
            addFav(sessionId)
            this.getFavedSessionIds()
        } catch(error) {
            console.log(error)
        }
    }

    removeFaveSession = (sessionId) => {
        try{removeFav(sessionId) 
            this.getFavedSessionIds()
        } catch(error) {
            console.log(error)
        }

    }

    render() {
        return (
            <FavesContext.Provider 
                value={{ ...this.state,
                        getFaves: this.getFavedSessionIds,
                        addFav: this.addFaveSession,
                        removeFav: this.removeFaveSession
                        }} >
                {this.props.children}
            </FavesContext.Provider>
        )
    }
}

export { FavesProvider }
export default FavesContext