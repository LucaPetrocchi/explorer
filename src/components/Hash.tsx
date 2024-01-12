import copy from "copy-to-clipboard"
import { useRef } from "react"

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
    <div className="flex flex-row">
      <p
        ref={hashRef}
        {...props}
      >
        {children}
      </p>
      <button
        type="button"
        onClick={copyHash}
      >
        b
      </button>
    </div>
  )
}

