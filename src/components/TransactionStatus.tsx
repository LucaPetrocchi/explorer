import { TxStatus } from "../mockdata";
import { FaCheck, FaQuestion, FaExclamation } from "react-icons/fa";

import Tooltip from "./Tooltip";

type TransactionStatusProps = {
  status: TxStatus;
}

export default function TransactionStatus({ status }: TransactionStatusProps) {

  const size = 25

  return (
    <>
      <div className="group relative p-2">
        {status === "confirmed" ? <FaCheck size={size} color="green" /> : null}
        {status === "failed" ? <FaExclamation size={size} color="red" /> : null}
        {status === "pending" ? <FaQuestion size={size} color="yellow" /> : null}
        <Tooltip text={
          status.charAt(0)
          .toUpperCase() + status.slice(1)
        } position="right-6 bottom-0 group-hover:right-10" />
      </div>
      
    </>
  )
}