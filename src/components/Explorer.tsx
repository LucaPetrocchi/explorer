import { Transaction } from "../mockdata"
import { useNavigate } from "react-router-dom";
import DateSince from "./DateSince";
import Hash from "./Hash";

type ExplorerProps = {
  data: Transaction[]
}

type CardProps = {
  transaction: Transaction;
}

export default function Explorer({ data }: ExplorerProps) {
  return (
    <>
    <table className="w-full">
      <thead>
        <tr>
          {['Tx Hash', 
            'To | From', 
            'Amount', 
            'Timestamp', 
            'Status'].map((text, index) => {
              return (
              <th
                key={index}
                className="max-w-[50px] text-left border-black border-solid border-2"
              >
                {text}
              </th>)
            })}
        </tr>
      </thead>
      <tbody>
        {data.map((transaction) => {
          return <TransactionCard key={transaction.hashTx} transaction={transaction} />
        })}
      </tbody>
    </table>
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
        className="hover:bg-gray-500 cursor-pointer"
        onClick={handleClick}
      >
        <td 
          className="explorer-table-cell-custom"
        >
          <Hash className="truncate w-3/4">{transaction.hashTx}</Hash>
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
          {transaction.status}
        </td>
      </tr>
  )
}