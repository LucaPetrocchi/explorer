import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getDataByHash } from "../mockdata"
import { useEffect, useState } from "react";
import { Interval, DateTime, Duration } from "luxon";

type Data = Awaited<ReturnType<typeof getDataByHash>>


export async function transactionLoader({ params }: LoaderFunctionArgs<string>) {
  const data: Data = await getDataByHash(params.hashTx)
  return { data }
}

export default function TransactionDetail() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof transactionLoader>>

  function getTimeSince(timestamp: string) {
    return Interval.fromDateTimes(
      DateTime.fromSQL(timestamp),
      DateTime.now()
    ).toDuration(['years', 'months', 'days', 'seconds'])
  }

  const timeSinceTransaction = data?.timestamp ? getTimeSince(data.timestamp) : undefined
  const timeSinceCompletion = data?.completionTime ? getTimeSince(data.completionTime) : undefined
  

  return (
    <div className="grid grid-cols-12 columns-sm gap-2 w-full text-center">
      <div className="col-span-12 truncate">{data?.hashTx}</div>

      <div className="col-span-5">{data?.currency} </div>
      <div className="col-span-2"> {data?.amount}</div>
      <div className="col-span-5">{data?.fees}</div>

      <div className="col-span-5 truncate flex flex-col">
        <p className="truncate">{data?.hashFrom}</p>
        <p>{data?.transferFrom}</p>
      </div>
      <div className="col-span-2">{`->`}</div>
      <div className="col-span-5 flex flex-col">
        <p className="truncate">{data?.hashTo}</p>
        <p>{data?.transferTo}</p>
      </div>

      <div className="col-span-2">{data?.status}</div>
      <div className="col-span-5">
        {timeSinceTransaction?.months == 0
          ? <CounterSince startSeconds={timeSinceTransaction.seconds} />
          : <DateSince date={timeSinceTransaction} />
        }
      </div>
      <div className="col-span-5">
        {data?.status === "failed"
          ? <p>N/A</p>
          : data?.status === "pending"
            ? <CounterSince startSeconds={timeSinceTransaction?.seconds} />
            : <DateSince date={timeSinceCompletion} /> 
        }

      </div>

    </div>
  )
}

type DateSinceProps = {
  date?: Duration;
}

function DateSince({ date }: DateSinceProps) {
  return (
    <>
      {date?.years
        ? `${date.years}y ${date.months}m`
        : date?.months 
          ? `${date.months}m ${date.days}d`
          : `${date?.days}d`
      }
    </>
  )
}

type CounterSinceProps = {
  startSeconds: number | undefined;
}

function CounterSince({ startSeconds }: CounterSinceProps) {
  const [seconds, setSeconds] = useState(startSeconds ? Math.floor(startSeconds) : 0)
  const displaySeconds = seconds % 60
  const minutes = Math.floor(seconds / 60) % 60
  const hours = Math.floor(minutes / 60) % 24

  useEffect(() => {
    const i = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => { clearInterval(i) }
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