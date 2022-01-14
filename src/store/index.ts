import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

// 整合 chrome插件 和中间件
const middlewares = composeWithDevTools(applyMiddleware(thunk))
// 创建仓库
const store = createStore(rootReducer, middlewares)

export default store

// 获取类型 并暴露
// ReturnType 获取function的类型 的返回值类型
// typeof 获取function的类型 参数和返回值类型
export type RootState = ReturnType<typeof store.getState>
