import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Menu: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
      <div className="flex w-full z-50 sticky top-[0px]">
        <div className="w-full">
          <nav className="flex relative flex-wrap justify-between items-center py-2 bg-indigo-900">
            <div className="container flex flex-wrap justify-between items-center px-4 mx-auto">
              <div className="flex lg:block relative lg:static justify-between lg:justify-start px-4 w-full lg:w-auto">
                <a className="inline-block py-2 mr-4 font-bold leading-relaxed text-gray-200 font-titillium-web text-xl whitespace-nowrap hover:cursor-default">
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
                  'lg:flex lg:h-auto flex-grow items-center overflow-hidden transition-height duration-1000' +
                  (menuOpen ? ' h-24' : ' h-0')
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row lg:ml-auto list-none">
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole"
                      className="flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase  hover:bg-blue-600 ease-in-out duration-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mx-3">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole/articles"
                      className="flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase hover:bg-blue-600 ease-in-out duration-500"
                    >
                      Articles
                    </Link>
                  </li>
                  <li className="mx-4">
                    {/* TODO: make reusable Link component */}
                    <Link
                      to="/news-from-the-wormhole/blogposts"
                      className="flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase hover:bg-blue-600 ease-in-out duration-500"
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
