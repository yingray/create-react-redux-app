import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import weatherReducer from './reducers/weatherReducer'

export function configureStore(history, initialState) {

    const reducer = combineReducers({
        todos,
        visibilityFilter,
        weatherReducer,
        routing: routerReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    )

    return store
}
