import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm bg-gray-100 dark:bg-gray-800 px-2 rounded font-medium text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
