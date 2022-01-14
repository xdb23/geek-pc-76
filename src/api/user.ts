import { request } from '@/utils'
import { AxiosPromise } from 'axios'
type LoginRes = {
    data: {
        token: string
        refresh_token: string
    }
}

export type UserInfo = {
    birthday: string
    gender: number
    id: string
    mobile: string
    name: string
    photo: string
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

function userInfo(): AxiosPromise<{data: UserInfo}> {
    return request({
        url: '/user/profile',
        method: 'get'
    })
}

export { login, userInfo }