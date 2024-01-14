import Hash from "./Hash"
import DateSince from "./DateSince"
import { Transaction } from "../mockdata"
import { FaChevronRight } from "react-icons/fa"
import { UppercaseFirst } from "../utils"
import TransactionStatus from "./TransactionStatus"

type TransactionBoxProps = {
  data: Transaction
}

export default function TransactionBox({ data }: TransactionBoxProps) {

  return (
    <>
      <div className="tbox-grid-custom grid-cols-2 rounded-t-3xl">
        <div className="col-span-1 flex flex-col p-6">
          <p className="my-auto">Hash:</p>
          <p className="sm:mt-6 my-auto">Amount:</p>
        </div>
        <div className="col-span-1 text-right flex flex-col p-6">
          <Hash className="truncate w-1/2 ml-auto">{data.hashTx}</Hash>
          <p className="sm:mt-6">
            {data.amount} {data.currency} {` (-${data.fees} USD fee)`}
          </p>
        </div>
      </div>

      <div className="tbox-grid-custom grid-cols-3">
        <div className="col-span-1 flex flex-col p-6">
          <p className="sm:mb-6 my-auto">
            {UppercaseFirst(data.transferFrom)} hash:
          </p>
          <Hash className="truncate w-1/2">{data.hashFrom}</Hash>
        </div>
        <div className="col-span-1 mx-auto my-auto flex flex-row align-middle">
          <FaChevronRight />
        </div>
        <div className="col-span-1 text-right flex flex-col p-6">
          <p className="sm:mb-6 my-auto">
            {UppercaseFirst(data.transferTo)} hash:
          </p>
          <Hash className="truncate w-1/2 ml-auto">{data.hashTo}</Hash>
        </div>
      </div>

      <div className="tbox-grid-custom grid-cols-3 rounded-b-3xl overflow-hidden">
        <div className="col-span-1 p-6 w-full flex flex-col ">
          <p className="mb-6">
            Timestamp:
          </p> 
          <DateSince timestamp={data.timestamp} />
        </div>
        <div className="col-span-1 p-6 mx-auto w-full flex flex-col text-center">
          <p className="mb-6">Finality:</p>
          {data.status === "pending"
            ? <p>In Progress</p>
            : data.status === "confirmed" && data.completionTime
              ? <DateSince timestamp={data.completionTime} />
              : <p>N/A</p>
          }
        </div>
        <div className="col-span-1 w-auto mr-6 ml-auto my-auto self-end flex justify-center">
          <TransactionStatus status={data.status} />
        </div>
      </div>
    </>
  )
}