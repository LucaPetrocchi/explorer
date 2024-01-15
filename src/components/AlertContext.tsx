import { createContext, useContext, useState } from "react";

type AlertTypes = "success" | "alert" | ''


const init: {
  text: string;
  type: AlertTypes
} = {
  text: '',
  type: '',
}

const AlertContext = createContext({
  ...init,
  setAlert: (text: string, type: AlertTypes) => {}
})

type AlertContextTypes = {
  children: JSX.Element;
}

export function AlertProvider({children}: AlertContextTypes) {
  const [text, setText] = useState<string>('')
  const [type, setType] = useState<AlertTypes>('')

  const setAlert = (text: string, type: AlertTypes) => {
    setText(text)
    setType(type)

    setTimeout(() => {
      setText('')
      setType('')
    }, 5000)
  }

  return (
    <AlertContext.Provider
      value={{
        text, type, setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => useContext(AlertContext)

export default useAlert

