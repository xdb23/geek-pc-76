import { LoginType } from './login'
import { RootState } from '..'
import { ThunkAction } from 'redux-thunk'
import { UserAction } from './user'
export * from './login'
type RootActionType = LoginType | UserAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootActionType>