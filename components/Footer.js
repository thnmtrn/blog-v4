import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
          <SocialIcon kind="discord" href={siteMetadata.discord} size="5" />
          <SocialIcon kind="dribbble" href={siteMetadata.twitter} size="5" />
          <SocialIcon kind="dev" href={siteMetadata.twitter} size="5" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://thientran.me">hi@thientran.me</Link>
        </div>
        <div className="flex flex-row mb-2 text-sm text-gray-500 dark:text-gray-400">
          <SocialIcon kind="coffee" href={siteMetadata.coffee} size="6" />
          <p>buy me coffee</p>
        </div>
      </div>
    </footer>
  )
}
