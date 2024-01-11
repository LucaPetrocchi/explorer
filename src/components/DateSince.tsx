import { Interval, DateTime } from "luxon"
import { useEffect, useState } from "react";

type DateSinceProps = {
  timestamp: string;
}

export default function DateSince({ timestamp }: DateSinceProps) {

  const i = Interval.fromDateTimes(
    DateTime.fromSQL(timestamp),
    DateTime.now()
  ).toDuration(['years', 'months', 'days', 'seconds'])

  if (i.months > 0 || i.years > 0 || i.days > 0) {

    return (
      <p>
        {i.years ? `${i.years}y ` : null}
        {i.months ? `${i.months}m ` : null}
        {i.days ? `${i.days}d` : null}
      </p>
    )

  } else {

    return <CounterSince startSeconds={i.seconds} />

  }

}

type CounterSinceProps = {
  startSeconds: number;
}

function CounterSince({ startSeconds }: CounterSinceProps) {
  const [rawSeconds, setSeconds] = useState(startSeconds)
  const displaySeconds = rawSeconds % 60
  const minutes = Math.floor(rawSeconds / 60) % 60
  const hours = Math.floor(minutes / 60) % 24

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <p>
      {hours
        ? `${hours}h ${minutes}m`
        : minutes
          ? `${minutes}m ${displaySeconds}s`
          : `${displaySeconds}s`
      }
    </p>
  )

}