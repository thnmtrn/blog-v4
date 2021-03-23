import { useState, useRef } from 'react'

function padTime(time) {
  return time.toString().padStart(2, '0')
}

export default function Pomodoro() {
  const [title, setTitle] = useState('Let the countdown begin!')
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const minutes = padTime(Math.floor(timeLeft / 60))
  const seconds = padTime(timeLeft - minutes * 60)

  function startTimer() {
    if (intervalRef.current !== null) return

    setTitle(`You're doing great!`)
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1

        resetTimer()
        return 0
      })
    }, 1000)
  }

  function stopTimer() {
    if (intervalRef.current === null) return

    setIsRunning(false)
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTitle('Keep it up!')
  }

  function resetTimer() {
    setIsRunning(false)
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTitle('Ready for another round?')
    setTimeLeft(25 * 60)
  }

  return (
    <div className="">
      <main>
        <div className="text-center">
          <h2 className="font-bold text-3xl ">{title}</h2>

          <div className="mt-6 font-semibold text-4xl">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>

          <div className="mt-6">
            {!isRunning && (
              <button
                className="bg-green-600 dark:bg-green-400 px-6 mx-6 font-semibold text-gray-800 dark:text-gray-200"
                onClick={startTimer}
              >
                Start
              </button>
            )}
            {isRunning && (
              <button
                className="bg-lime-400 dark:bg-amber-400 px-6 mx-6 font-semibold text-gray-800 dark:text-gray-200"
                onClick={stopTimer}
              >
                Pause
              </button>
            )}
            <button
              className="bg-red-600 px-6 mx-6 font-semibold text-gray-800 dark:text-gray-200 "
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
