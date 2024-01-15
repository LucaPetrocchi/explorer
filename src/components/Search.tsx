import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import useAlert from "./AlertContext"

export default function Search() {
  const inputRef = useRef<null | HTMLInputElement>()
  const [value, setValue] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const {setAlert} = useAlert()

  const hashrgxp = new RegExp("^[a-fA-F0-9]{64}$")

  function clearValue() {
    setValue('')
    inputRef.current?.blur()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    let test = hashrgxp.test(value)
    let navTo = `/transaction/${value}`

    if (test && navTo != location.pathname) {
      navigate(navTo)
    } else {
      setAlert("Invalid Hash!", "alert")
    }
  }

  return (
    <div className="p-4 mb-5 border-2 rounded-2xl border-transparent bg-neutral-900
    focus-within:border-white focus:border-white hover:border-white 
    flex flex-row align-middle">
      <FaSearch color="white" className="self-center" />
      <form
        className="text-black w-full px-2 self-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full bg-transparent text-white outline-none relative"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          placeholder="Input tx hash..."
        />
        {value != ''
          ? <button
            type="button"
            className="absolute right translate-x-[-20px]"
            onClick={clearValue}
          >
            <AiOutlineClose color="white" size={25} />
          </button>
          : null}
      </form>
    </div>
  )
}