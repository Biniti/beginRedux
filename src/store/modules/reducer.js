import { combineReducers } from 'redux'
import selectTheme from './reducers/theme'
import data from './reducers/Data'

export const reducer = combineReducers({
    thema: selectTheme,
    playData: data,
})




