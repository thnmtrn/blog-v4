import Link from 'next/link'
import Image from 'next/image'

export default function ExtrasCard({ title, description, slug, logo, ...rest }) {
  return (
    <div className="flex flex-row border border-grey-200 dark:border-gray-900 rounded p-4 w-full">
      <Link href={`/extras/${slug}`}>
        <a className="mr-6 mt-4" {...rest}>
          <Image
            alt={title}
            height={32}
            width={32}
            src={`/logos/${logo}`}
            className="rounded-full"
          />
        </a>
      </Link>
      <div>
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}
