import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getDataByHash } from "../mockdata"
import DateSince from "../components/DateSince";
import Hash from "../components/Hash";

type Data = Awaited<ReturnType<typeof getDataByHash>>


export async function transactionLoader({ params }: LoaderFunctionArgs<string>) {
  const data: Data = await getDataByHash(params.hashTx)
  if (data) {
    return { data }
  } else {
    throw new Error("Could not be found")
  }
}

export default function TransactionDetail() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof transactionLoader>>  

  return (
    <div className="grid grid-cols-12 columns-sm gap-2 w-full text-center">
      <div className="col-span-12 truncate">
        <Hash className="truncate">{data.hashTx}</Hash>
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