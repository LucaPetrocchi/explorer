import { useEffect, useRef, useState, cloneElement } from "react";
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";

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
      
        <h1 className="self-center text-2xl">
          <Link to={`/`}>EXPLORER</Link>
        </h1>
    
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
        className="bg-gray-500 p-3 w-fit h-fit 
        flex align-middle 
        hover:scale-[1.1]
        transition-all
        group"
      >
        {icon}
        <Tooltip text={name} position="right-6 top-0 mt-2 group-hover:right-16" />
      </button>

      {isClicked
        ? (
          <div
            className="bg-neutral-950 border-neutral-800 border-2 z-10 flex flex-col justify-center absolute right-0 mt-2 pt-2"
            onClick={
              (e) => { e.stopPropagation() }
            }
          >
            <h1 className="text-center text-lg mb-1">{name}</h1>
            <hr className="w-[80%] border-neutral-600 place-self-center" />
            <NavSubOption subOptions={subOptions} />
          </div>
        )
        : null
      }
    </div>
  )
}

function NavSubOption({ subOptions }: NavSubOptionProps) {
  return (
    <ul className="">
      {subOptions.map((sop) => {
        return (
          <li className="block p-0 mx-3 w-[10rem]">
            <a className="p-3 my-3 w-full bg-neutral-700 
              hover:bg-neutral-500 hover:scale-[1.05] transition-all 
              flex flex-row justify-between"
              href={sop.url}
            >
              <div className="self-center">
                {cloneElement(sop.icon, { "size": 25 })}
              </div>
              <p className="self-center">{sop.name}</p>
            </a>
          </li>
        )
      })
      }
    </ul>
  )
}