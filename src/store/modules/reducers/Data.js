import { types } from '../types'

const initialState = {
  data: [],
}

export default function data (state=initialState, action) {
  switch(action.type){
    case types.PUSH_DATA:
      const getData = {...state}
      getData.data.push({title: 'PEGOU', content: 'DESPEGOU'})
      return getData

    case types.CLEAR_DATA:
      const clearData = {...state}
      clearData.data = []
      return clearData

    case types.DELETE_DATA:
      const deleteData = {...state}
        deleteData.data.splice(-1)
        return deleteData

    default:
      return state
  }
}





function deleteData (state, action){
  switch(action.type){
    case types.DELETE_DATA:

  }
}
