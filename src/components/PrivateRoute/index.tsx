import { isAuth } from '@/utils'
import { message } from 'antd'
import { Redirect, Route, RouteProps } from 'react-router-dom'

function PrivateRoute ({ children, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuth()) {
          return children
        } else {
          message.error('麻烦请先登录！！！')
          return (
            <Redirect
              to={{
                pathname: './login',
                state: { from: location }
              }}
            />
          )
        }
      }}
    />
  )
}

export default PrivateRoute
