import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

export function configureStore(history, initialState) {

    const reducer = combineReducers({
        todos,
        visibilityFilter,
        routing: routerReducer
    });
    
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    );

    return store
}
