import { getToken } from "@/utils"
import { LoginType } from "../actions"

const initialState = getToken()

// 函数 +初始化状态
// action 先写成any
const login = (state = initialState, action: LoginType) => {
  switch (action.type){
    case 'login/login':
      return action.token
      default:
        return state
  }
}

export default login
