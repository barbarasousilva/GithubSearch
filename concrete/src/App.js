import React from 'react';
import Home from './pages/Home/index'
import { Switch, Route } from 'react-router-dom'
import Result from './pages/Result';

import './App.css';

function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/Result' component={Result} />
      </div>
    </Switch>
  )
}

export default App;
