import { combineReducers } from 'redux'; 
import { FAKE_ACTION } from './types'

const INITIAL_STATE = {
    currentUser: {}, 
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FAKE_ACTION: 
            const newState = {current, possible}; 
            return newState 
        default: 
            return state 
    }
}

export default combineReducers({
    user: userReducer, 
})