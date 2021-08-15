import React from 'react'
import Menu from './components/Menu'
import Home from './views/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-200">
        <Menu />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
