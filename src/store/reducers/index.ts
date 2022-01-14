import { combineReducers } from 'redux'

import login from './login'
import user from './user'

// 多个reducers合并
const rootReducer = combineReducers({
  login,
  user
})

// 暴露出去
export default rootReducer
