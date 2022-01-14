import { isAuth } from '@/utils'
import { message } from 'antd'
import { useEffect } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

function PrivateRoute ({ children, ...rest }: RouteProps) {
  useEffect(() => {
    if (!isAuth()) {
      message.error('麻烦请先登录！！！')
    }
  })

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuth()) {
          return children
        } else {
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
