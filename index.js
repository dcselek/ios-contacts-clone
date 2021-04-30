import React, { Component } from 'react'
import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux'
import store from './src/redux/store'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

registerRootComponent(Root);