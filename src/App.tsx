import React from 'react'
import Menu from './components/Menu'
import Home from './views/Home'
import Articles from './views/Articles'
import BlogPosts from './views/BlogPosts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Particles from 'react-tsparticles'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = (particles: any) => {
    particles.loadJSON('tsparticles', '../particles.config.json')
  }
  return (
    <React.Fragment>
      <Particles
        className=" fixed z-0 opacity-95"
        id="tsparticles"
        init={particlesInit}
      />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-200">
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
    </React.Fragment>
  )
}

export default App
