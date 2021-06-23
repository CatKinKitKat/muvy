import React from 'react'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Person from './pages/Person'
import People from './pages/People'
import Account from './pages/Account'
import Search from './pages/Search'
import Error from './pages/Error'
import Login from './pages/Login'
import Product from './pages/Product'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movie/:id' component={Product} />
          <Route path='/movies' component={Movies} />
          <Route path='/series' component={Series} />
          <Route path='/person' component={Person} />
          <Route path='/people' component={People} />
          <Route path='/account' component={Account} />
          <Route path='/login' component={Login} />
          <Route path='/search' component={Search} />
          <Route><Error type="404" /> </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
