import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import Bookmark from './icons/bookmark.svg'
import Pen from './icons/pen.svg'
import Lightning from './icons/lightning.svg'
import Box from './icons/box.svg'
import Folder from './icons/folder.svg'
import Dots from './icons/dots.svg'
import Close from './icons/close.svg'
import Tags from './icons/tags.svg'
import Scissors from './icons/scissors.svg'
import Burger from './icons/burger.svg'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden flex flex-row">
      <Link href="/blog" className="hover:text-green-800 dark:hover:text-indigo-500 text-gray-900 dark:text-gray-300 opacity-50"><Pen className="m-1"/></Link>
      <Link href="/tags" className="hover:text-blue-800 dark:hover:text-yellow-500 text-gray-900 dark:text-gray-300 opacity-50"><Tags className="m-1"/></Link>
      <Link href="/projects" className="hover:text-yellow-800 dark:hover:text-red-500 text-gray-900 dark:text-gray-300 opacity-50"><Folder className="m-1"/></Link>
      <Link href="/tags/bookmark" className="hover:text-red-800 dark:hover:text-blue-600 text-gray-900 dark:text-gray-300 opacity-50"><Bookmark className="m-1"/></Link>
      <Link href="/tags/notes" className="hover:text-blue-800 dark:hover:text-green-600 text-gray-900 dark:text-gray-300 opacity-50"><Lightning className="m-1"/></Link>
      <Link href="/snippets" className="hover:text-purple-800 dark:hover:text-pink-600 text-gray-900 dark:text-gray-300 opacity-50"><Scissors className="m-1"/></Link>
      <button
        type="button"
        className="text-pink-800 dark:text-blue-600"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >

          {navShow ? (<Close className="text-gray-500 dark:text-gray-400"/>

          ) : (
            <Burger/>
          )}

      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 bg-white dark:bg-black opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
