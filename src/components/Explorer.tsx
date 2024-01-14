import { Transaction } from "../mockdata"
import { useNavigate } from "react-router-dom";
import DateSince from "./DateSince";
import Hash from "./Hash";
import TransactionStatus from "./TransactionStatus";

type ExplorerProps = {
  data: Transaction[]
}

type CardProps = {
  transaction: Transaction;
}

export default function Explorer({ data }: ExplorerProps) {
  return (
    <>
    <div className="rounded-3xl overflow-hidden">
      <table className="w-full text-center">
        <thead>
          <tr className="hover:bg-neutral-800">
            {['Tx Hash',
              'To | From',
              'Amount',
              'Timestamp',
              'Status'].map((text, index) => {
                return (
                  <th
                    key={index}
                    className="max-w-[50px] 
                    border-neutral-600 border-t-0 
                    border-solid border-[1px]
                    first:border-l-0 last:border-r-0"
                  >
                    {text}
                  </th>)
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => {
            return (
              <TransactionCard key={transaction.hashTx} transaction={transaction} />
            )
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}


function TransactionCard({ transaction }: CardProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/transaction/${transaction.hashTx}`)
  }

  return (
    <tr
      className="hover:bg-neutral-800 cursor-pointer"
      onClick={handleClick}
    >
      <td
        className="explorer-table-cell-custom"
      >
        <Hash className="truncate text-center">{transaction.hashTx}</Hash>
      </td>
      <td
        className="explorer-table-cell-custom"
      >
        {transaction.transferTo} {`>`} {transaction.transferFrom}
      </td>
      <td
        className="explorer-table-cell-custom"
      >
        {transaction.amount} {transaction.currency}
      </td>
      <td
        className="explorer-table-cell-custom"
      >
        <DateSince timestamp={transaction.timestamp} />
      </td>
      <td
        className="explorer-table-cell-custom"
      >
        <div className="w-full flex justify-center">
          <TransactionStatus status={transaction.status} />
        </div>
      </td>
    </tr>
  )
}