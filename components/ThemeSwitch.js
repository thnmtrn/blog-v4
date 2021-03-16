import { useTheme } from 'next-themes'
import Moon from './icons/moon.svg'
import Sun from './icons/sun.svg'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
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
