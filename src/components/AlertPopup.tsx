import useAlert from "./AlertContext";
import { FaCheck, FaExclamation } from "react-icons/fa";

export default function AlertPopup() {
  const { text, type } = useAlert()

  let style = ""
  let icon = <i></i>
  let size = 20

  if (type === "alert") {
    style = "bg-red-900"
    icon = <FaExclamation size={size} />
  } else if (type === "success") {
    style = "bg-green-900"
    icon = <FaCheck size={size} />
  }

  if (type && text) {
    return (
      <div className={`absolute w-full top-5`}>
        <div
          className={`${style} mx-auto w-[15%] py-4 px-6 
        border-2 border-gray-400 flex flex-row justify-between`}
        >
          <p className="text-left">
            {text}
          </p>
          <div className="my-auto">
            {icon}
          </div>
        </div>
      </div>
    )
  }
}

