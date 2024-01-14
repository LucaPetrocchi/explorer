import { TxStatus } from "../mockdata";
import { FaCheck, FaQuestion } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Tooltip from "./Tooltip";

type TransactionStatusProps = {
  status: TxStatus;
}

export default function TransactionStatus({ status }: TransactionStatusProps) {

  const size = 20

  return (
    <>
      <div className="group relative">
        {status === "confirmed" ? <FaCheck size={size} color="green" /> : null}
        {status === "failed" ? <AiOutlineClose size={size} color="red" /> : null}
        {status === "pending" ? <FaQuestion size={size} color="yellow" /> : null}
        <Tooltip text={status.charAt(0).toUpperCase()+status.slice(1)} position="right-6 bottom-[-10px] group-hover:right-8" />
      </div>
      
    </>
  )
}