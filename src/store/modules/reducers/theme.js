import { types } from '../types'

const initialState = {
  selectTheme: true
}

export default function selectTheme (state = initialState, action ){
  switch(action.type){
    case types.LIGHT_THEME:
        const newState = {...state}
        newState.selectTheme = !newState.selectTheme
        return newState

    default:
      return state
  }
}
