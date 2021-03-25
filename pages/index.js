import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Tweet from '@/components/Tweet'
import { getTweets } from '@/lib/twitter'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projectsData'
import Slider from 'react-slick'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tweets = await getTweets([
    '1190125711467655169',
    '1352315936808837123',
    '1326969029140025351',
  ])

  return {
    props: { tweets, posts },
  }
}

export default function Home({ posts, tweets }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello. I'm Thien.
          </h1>
          <p className="text-normal leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>

          <h1 className="text-3xl font-bold pt-10">Latest Blog Posts</h1>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <div className="space-y-2 xl:col-span-3">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                            {/* <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl> */}
                          </h2>
                          <div className="flex flex-wrap mt-1">
                            {tags.map((tag) => (
                              <Tag key={tag} text={`#${tag}`} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <h1 className="text-3xl font-extrabold pt-10 pb-4">Recent Projects</h1>

      {/* <ProjectCard
        title="project 1"
        description="asdfsf"
        href="https://thientran.me"
        icon="react2025"
      />
      <ProjectCard
        title="project 2"
        description="asdfsf"
        href="https://thientran.me"
        icon="codingbraces"
      />
      <ProjectCard
        title="project 3"
        description="asdfsf"
        href="https://thientran.me"
        icon="codingbrackets"
      />
      <ProjectCard title="project 3" description="asdfsf" href="https://thientran.me" icon="todo" />
      <ProjectCard
        key="pokedex"
        title={projectsData.title}
        description="asdfsf"
        href="https://thientran.me"
        icon="pokeball"
      />

      {projectsData.map((d) => (
        <ProjectCard
          key={d.title}
          title={d.title}
          description={d.description}
          href={d.href}
          icon={d.icon}
        />
      ))}
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href="/projects"
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="all posts"
        >
          More Projects &rarr;
        </Link>
      </div> */}

      <h1 className="text-3xl font-extrabold pt-10">Latest Tweets</h1>

      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href="https://twitter.com/thienmtran"
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="all posts"
        >
          More Tweets &rarr;
        </Link>
      </div>
    </>
  )
}
