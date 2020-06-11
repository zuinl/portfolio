import { createStore, combineReducers } from 'redux'
import TranslateReducer from './Reducers/Translate'

const reducers = combineReducers({
    translate: TranslateReducer
})

export default createStore(reducers)