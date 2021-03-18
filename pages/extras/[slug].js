import hydrate from 'next-mdx-remote/hydrate'

import { getFiles, getFileBySlug } from '@/lib/mdx'
import ExtrasLayout from '@/layouts/extras'
import MDXComponents from '@/components/MDXComponents'

export default function Extras({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return <ExtrasLayout frontMatter={frontMatter}>{content}</ExtrasLayout>
}

export async function getStaticPaths() {
  const extras = await getFiles('extras')

  return {
    paths: extras.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const extras = await getFileBySlug('extras', params.slug)

  return { props: extras }
}
