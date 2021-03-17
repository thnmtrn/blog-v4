import { useTheme } from 'next-themes'
import Moon from './icons/moon.svg'
import Sun from './icons/sun.svg'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="dark:text-purple-300 text-yellow-700 hover:text-green-400 dark:hover:text-blue-500"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
        {theme === 'dark' ? (
          <Moon/>
        ) : (
          <Sun/>
        )}
    </button>
  )
}

export default ThemeSwitch
