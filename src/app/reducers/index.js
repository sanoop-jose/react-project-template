import { combineReducers } from 'redux'

import globalData from './globalData'

let reducers = {
  globalData: globalData
}

const rootReducer = combineReducers(reducers);

export default rootReducer