import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Search() {
  const inputRef = useRef<null | HTMLInputElement>()
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const hashrgxp = new RegExp("^[a-fA-F0-9]{64}$")

  function clearValue() {
    setValue('')
    inputRef.current?.blur()
  }

  function handleSubmit() {
    let test = hashrgxp.test(value)
    if (test) {
      navigate(`/transaction/${value}`)
    } else {
      console.log("EPIC FAIL")
    }
    
  }

  return (
    <form 
      className="text-black mb-5 w-full relative"
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        className="w-full"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        placeholder="Input tx hash..."
      />
      { value != '' 
      ? <button 
          type="button"
          className="absolute right top-[50%] translate-y-[-50%] translate-x-[-30px]"
          onClick={clearValue}
        >
          TET
        </button>
      : null}


    </form>
  )
}