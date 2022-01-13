import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";



function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='./login' component={Login}></Route>
          <Route path='./home' component={Layout}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App