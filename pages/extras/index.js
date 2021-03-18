import ExtrasCard from '@/components/ExtrasCard'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export default function Extras({ extras }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Extra Pages
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">A collection of random pages.</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        {extras.map((extras) => (
          <ExtrasCard
            key={extras.slug}
            title={extras.title}
            slug={extras.slug}
            logo={extras.logo}
            description={extras.description}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const extras = await getAllFilesFrontMatter('extras')

  return { props: { extras } }
}
