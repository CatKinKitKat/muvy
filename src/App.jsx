import React from 'react'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Person from './pages/Person'
import People from './pages/People'
import Discussion from './pages/Discussion'
import Account from './pages/Account'
import Search from './pages/Search'
import Error from './pages/Error'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Movie from './pages/Movie'
import Serie from './pages/Serie'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movie/:id' component={Movie} />
          <Route path='/serie/:id' component={Serie} />
          <Route path='/movies/:sort_type' component={Movies} />
          <Route path='/series/:sort_type' component={Series} />
          <Route path='/person/:id' component={Person} />
          <Route path='/people/:sort_type' component={People} />
          <Route path='/discussion/:type/:id' component={Discussion} />
          <Route path='/account' component={Account} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/search' component={Search} />
          <Route><Error type="404" /> </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
