import NowPlaying from '@/components/NowPlaying'
import TopTracks from '@/components/TopTracks'

export default function Music() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight ">Music</h1>
      <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">
        My Current Top 10 Tracks. Auto Updated.
      </p>
      <TopTracks />
      <NowPlaying/>
    </>
  )
}
