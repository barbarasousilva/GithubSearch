import React from 'react';
import Home from './pages/Home/index'
import { Switch, Route } from 'react-router-dom'
import Result from './pages/Result';
import Repo from '../src/components/Repo/Repo'

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/result' component={Result} />
      <Route path='/repos' component={Repo} />
    </Switch>
  )
}

export default App;
