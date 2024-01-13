import Hash from "./Hash"
import DateSince from "./DateSince"
import { Transaction } from "../mockdata"

type TransactionBoxProps = {
  data: Transaction
}

export default function TransactionBox({ data }: TransactionBoxProps) {

  return (
    <div className="grid grid-cols-12 columns-sm gap-2 text-center">
      <div className="col-span-12 truncate flex justify-center">
        <Hash className="truncate w-full mr-1">{data.hashTx}</Hash>
      </div>

      <div className="col-span-5">{data.currency} </div>
      <div className="col-span-2"> {data.amount}</div>
      <div className="col-span-5">{data.fees}</div>

      <div className="col-span-5 truncate flex flex-col">
        <Hash className="truncate">{data.hashFrom}</Hash>
        <p>{data.transferFrom}</p>
      </div>
      <div className="col-span-2">{`->`}</div>
      <div className="col-span-5 flex flex-col">
        <Hash className="truncate">{data.hashTo}</Hash>
        <p>{data.transferTo}</p>
      </div>

      <div className="col-span-2">{data.status}</div>
      <div className="col-span-5">
        {data.timestamp
          ? <DateSince timestamp={data.timestamp} />
          : 'N/A'
        }
      </div>
      <div className="col-span-5">
        {data.status === "pending"
          ? <DateSince timestamp={data.timestamp} />
          : data.status === "confirmed" && data.completionTime
            ? <DateSince timestamp={data.completionTime} />
            : 'N/A'

        }
      </div>
    </div>
  )
}