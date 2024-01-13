import { useEffect, useRef, useState } from "react";

type NavSubOptionProps = {
  subOptions: NavSubOptions[]
}

type NavSubOptions = {
  icon: JSX.Element;
  name: string;
  url: string;
}

type NavOptionProps = {
  icon: JSX.Element;
  name: string;
  subOptions: NavSubOptions[];
}

type NavbarProps = {
  options: NavOptionProps[];
}

export default function Navbar({ options }: NavbarProps) {
  return (
    <nav className="flex flex-row h-24 w-full px-5 align-middle justify-between bg-black border-b-gray-700 border-b-[1px]">
      <h1 className="self-center text-2xl">EXPLORER</h1>
      <div className="flex flex-row h-fit space-x-5 justify-between self-center">
        {options.map((op) => {
          return (
            <NavOption
              key={op.name}
              icon={op.icon}
              name={op.name}
              subOptions={op.subOptions}
            />
          )

        })}
      </div>
    </nav>
  )
}



function NavOption({ icon, name, subOptions }: NavOptionProps) {
  const [isClicked, setClicked] = useState(false)
  const optionRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClose)
    return () => {
      document.removeEventListener("mousedown", handleClose)
    }
  })

  const handleClose = (e: Event) => {
    if (optionRef.current
      && e.target instanceof Element
      && !optionRef.current.contains(e.target)) {
      setClicked(false)
    }
  }

  function clickToggle() {
    setClicked(!isClicked)
  }

  return (
    <div
      className="relative"
      onClick={clickToggle}
      ref={optionRef}
    >
      <button
        className="bg-gray-500 p-3 w-fit h-fit flex align-middle"
      >
        {icon}
      </button>
      {
        isClicked
          ? <NavSubOption subOptions={subOptions} />
          : null
      }
    </div>
  )
}

function NavSubOption({ subOptions }: NavSubOptionProps) {
  return (
    <div 
      className="dropdown-menu absolute right-0 w-[100px]"
      onClick={
        (e) => {e.stopPropagation()}
      }
    >
      <ul className="">
        {subOptions.map((sop) => {
          return (
            <li className="block p-0">
              <a className="block"
                href={sop.url}
              >
                {sop.name}
              </a>
            </li>
          )
        })

        }

      </ul>
    </div>
  )
}