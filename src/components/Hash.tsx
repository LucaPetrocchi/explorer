import copy from "copy-to-clipboard"
import { useRef } from "react"
import { FaCopy } from "react-icons/fa";
import Tooltip from "./Tooltip";

type HashProps = {
  children: string;
} & React.ComponentPropsWithoutRef<"p">;


export default function Hash({ children, ...props }: HashProps) {
  const hashRef = useRef<null | HTMLParagraphElement>(null)

  function copyHash(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let hash = hashRef.current?.textContent
    e.stopPropagation()
    hash ? copy(hash) : console.log("Could not find value to copy.")
  }

  return (
    <div className="flex flex-row gap-2">
      <p
        ref={hashRef}
        {...props}
      >
        {children}
      </p>
      <button
        type="button"
        className="right group relative"
        onClick={copyHash}
      >
        <FaCopy size={15} />
        <Tooltip text="Copy to Clipboard" position="bottom-[-6px] right-6" />
      </button>
    </div>
  )
}

