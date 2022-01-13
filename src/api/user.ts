import { request } from '@/utils'
import { AxiosPromise } from 'axios'
type LoginRes = {
    data: {
        token: string
        refresh_token: string
    }
}
function login(mobile: string, code: string):AxiosPromise<LoginRes> {
    return request ({
        url: '/authorizations',
        method: 'post',
        data: {
            mobile,
            code
        }
    })
}
export { login }