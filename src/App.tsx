import React from 'react'
import Menu from './components/Menu'
import Home from './views/Home'
import Articles from './views/Articles'
import BlogPosts from './views/BlogPosts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-200">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/blogposts">
            <BlogPosts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
