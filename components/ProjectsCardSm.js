import Image from 'next/image'
import Link from '@/components/Link'

const ProjectsCardSm = ({ title, description, href }) => (
  <div className="p-4 md:w-1/2 md " style={{ maxWidth: '544px' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">

      <div className="p-3">
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default ProjectsCardSm
