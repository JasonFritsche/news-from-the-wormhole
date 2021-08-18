import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <nav className="flex relative flex-wrap justify-between items-center py-3 bg-blue-400">
            <div className="container flex flex-wrap justify-between items-center px-4 mx-auto">
              <div className="flex lg:block relative lg:static justify-between lg:justify-start px-4 w-full lg:w-auto">
                <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white whitespace-nowrap">
                  News From the Wormhole
                </a>
                <button
                  className="block lg:hidden py-1 px-3 text-xl leading-none text-white bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  'lg:flex flex-grow items-center' +
                  (menuOpen ? ' flex' : ' hidden')
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row lg:ml-auto list-none">
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/"
                      className="flex items-center py-2 px-3 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/articles"
                      className="flex items-center py-2 px-3 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mx-4">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/blogposts"
                      className="flex items-center py-2 px-3 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
