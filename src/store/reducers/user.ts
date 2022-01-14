import { UserInfo } from "@/api";
import { UserAction } from "../actions/user";


const initialState = {} as UserInfo

const user = (state: UserInfo = initialState, action: UserAction) => {
    switch (action.type) {
        case 'user/info':
            return action.info
            default:
                return state
    }
}
export default user