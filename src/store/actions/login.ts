import { login } from '@/api'
import { setToken } from '@/utils'
import { RootThunkAction } from '.'

export type LoginType = {
    type: 'login/login'
    token: string
}
function loginAction(mobile: string, code: string): RootThunkAction {
    return async (dispatch) => {
        const res = await login(mobile, code)
        setToken(res.data.data.token)
        // 数据保存到redux
        dispatch({
            type: 'login/login',
            token: res.data.data.token
        })
    }
}
export { loginAction }