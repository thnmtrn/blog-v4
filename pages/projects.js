import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'
import ProjectsCardSm from '@/components/ProjectsCardSm'

export default function Projects() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some projects I made from online classes.
          </p>
        </div>
        <div className="container">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full mt-4">
            {projectsData.map((d) => (
              <ProjectsCardSm
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
