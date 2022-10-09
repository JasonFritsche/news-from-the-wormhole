import React, { useCallback } from 'react'
import Menu from './components/Menu'
import Home from './views/Home'
import Articles from './views/Articles'
import BlogPosts from './views/BlogPosts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesOptions from './vendors/react-tsparticles/options'
import NoRouteMatch from './views/NoRouteMatch'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <React.Fragment>
      <Particles
        className="opacity-300 fixed z-0"
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-gray-200">
          <Menu />
          <Switch>
            <Route exact path="/news-from-the-wormhole">
              <Home />
            </Route>
            <Route path="/news-from-the-wormhole/articles">
              <Articles />
            </Route>
            <Route path="/news-from-the-wormhole/blogposts">
              <BlogPosts />
            </Route>
            <Route path="*">
              <NoRouteMatch />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
