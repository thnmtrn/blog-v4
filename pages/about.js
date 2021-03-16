import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Full Stack Developer</div>
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
            Hey, I am Thien Tran, a javascript enthusiast. I’m pursuing a career in web development. This is one of my homepages I’ve built to test out some new technolgies I’ve learned.

I am currently a freelance developer. I am an advocate of minimalist, user friendly, and helpful apps. My current favorite stack is nextjs, reactjs, tailwindcss, and MongoDB. As a job-seeker and student, I’m always curious and trying out new technologies.
            </p>
            <p>
            I am javascript enthusiast, currently going through the freecodecamp and theOdinProject developer program online. This is my personal homepage where I test out some of the new materials I learn.
            </p>
            <p>
            I have an innate desire to create - websites, programs, pictures, videos, music - you name it. My passion lies in the instersion of creation and communication. I want to create tools to help humans solve problems better and faster.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
