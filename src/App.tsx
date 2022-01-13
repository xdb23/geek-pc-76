import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'




function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            console.log('跳转了！！！')
            return <Redirect to='/home' />
          }} />
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Layout}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App