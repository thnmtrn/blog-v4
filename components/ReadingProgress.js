import { useState, useEffect } from 'react'

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })

  return <div className={`reading-progress-bar bg-lime-500 dark:bg-cyan-500`}  style={{ width: `${readingProgress}%` }} />
}

const scrollListener = () => {
  if (!target.current) {
    return
  }

  const element = target.current
  const totalHeight = element.clientHeight - element.offsetTop
  const windowScrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

  if (windowScrollTop === 0) {
    return setReadingProgress(0)
  }

  if (windowScrollTop > totalHeight) {
    return setReadingProgress(100)
  }

  console.log(windowScrollTop)

  setReadingProgress((windowScrollTop / totalHeight) * 100)
}

export default ReadingProgress
