import { getTweets } from '@/lib/twitter'

export default async (_, res) => {
  const tweets = await getTweets(['935857414435495937'])

  return res.status(200).json(tweets)
}
