import { UserInfo,userInfo } from "@/api";
import { clearToken } from "@/utils";
import { RootThunkAction } from ".";


export type UserAction = {
    type: 'user/info'
    info: UserInfo
}

function userInfoAction(): RootThunkAction {
    return async (dispatch) => {
        const res = await userInfo()
        dispatch({
            type: 'user/info',
            info: res.data.data
        })
    }
}
function logoutAction(): RootThunkAction {
    return (dispatch) => {
        clearToken()
        dispatch({
            type: 'user/info',
            info: {} as UserInfo
        })
    }
}
export { userInfoAction, logoutAction }