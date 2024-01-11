import { useRef } from "react";
import { Transaction } from "../mockdata"
import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";

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
            'Status'].map((text) => {
              return (
              <th
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
  const hashRef = useRef<null | HTMLParagraphElement>(null)

  function handleClick() {
    navigate(`/transaction/${transaction.hashTx}`)
  }

  function copyHash(e: React.MouseEvent<HTMLButtonElement, MouseEvent>    ) {
    let hash = hashRef.current?.textContent
    e.stopPropagation()
    console.log(hash)
    if (hash) {
      copy(hash)
    }
  }

  return (
      <tr
        className="hover:bg-gray-500 cursor-pointer"
        onClick={handleClick}
      >
        <td 
          className="explorer-table-cell-custom"
        >
          <div className="flex flex-row justify-between">
            <p 
              className="truncate w-3/4"
              ref={hashRef}
            >
              {transaction.hashTx}
            </p>
            <button 
              type="button"
              onClick={copyHash}
            >b</button>
          </div>
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
          {transaction.timestamp}
        </td>
        <td
          className="explorer-table-cell-custom"
        >
          {transaction.status}
        </td>
      </tr>
  )
}