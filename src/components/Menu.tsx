import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Menu: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <div className="sticky top-[0px] z-50 flex w-full">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between bg-indigo-900 py-2">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
              <div className="relative flex w-full justify-between px-4 lg:static lg:block lg:w-auto lg:justify-start">
                <a className="mr-4 inline-block whitespace-nowrap py-2 font-titillium-web text-xl font-bold leading-relaxed text-gray-200 hover:cursor-default">
                  News From the Wormhole
                </a>
                <button
                  className="outline-none focus:outline-none block cursor-pointer rounded border border-solid border-transparent bg-transparent py-1 px-3 text-xl leading-none text-white lg:hidden"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  'flex-grow items-center overflow-hidden transition-height duration-1000 lg:flex lg:h-auto' +
                  (menuOpen ? ' h-24' : ' h-0')
                }
                id="example-navbar-info"
              >
                <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole"
                      className="flex items-center rounded-md py-2 px-3 text-base font-bold uppercase leading-snug text-white duration-500 ease-in-out hover:bg-blue-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole/articles"
                      className="flex items-center rounded-md py-2 px-3 text-base font-bold uppercase leading-snug text-white duration-500 ease-in-out hover:bg-blue-600"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mx-4">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole/blogposts"
                      className="flex items-center rounded-md py-2 px-3 text-base font-bold uppercase leading-snug text-white duration-500 ease-in-out hover:bg-blue-600"
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

export default Menu
