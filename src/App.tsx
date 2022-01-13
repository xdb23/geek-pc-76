import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import PrivateRoute from './components/PrivateRoute'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              console.log('跳转了！！！')
              return <Redirect to='/home' />
            }}
          />
          <Route path='/login' component={Login}></Route>
          <PrivateRoute path='/home'>
            <Layout />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
