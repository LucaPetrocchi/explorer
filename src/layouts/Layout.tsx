
import {
  AiFillInfoCircle,
  AiOutlineFileText,
  AiOutlineTeam,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FaQuestionCircle,
  FaTelegram,
} from "react-icons/fa";
import {
  MdOutlinePrivacyTip,
  MdFeedback,
} from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5"

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Search from "../components/Search";
import "../index.css"

const navOptions = [
  {
    icon: <AiOutlineTeam size={30} />,
    name: "Contact",
    subOptions: [
      {
        icon: <MdFeedback />,
        name: "Feedback",
        url: "#",
      },
      {
        icon: <IoLogoDiscord />,
        name: "Discord",
        url: "#",
      },
      {
        icon: <AiFillGithub />,
        name: "GitHub",
        url: "#",
      },
      {
        icon: <FaTelegram />,
        name: "Telegram",
        url: "#",
      },
      {
        icon: <AiFillTwitterCircle />,
        name: "Twitter",
        url: "#",
      }
    ],
  },
  {
    icon: <AiFillInfoCircle size={30} />,
    name: "Information",
    subOptions: [
      {
        icon: <FaQuestionCircle />,
        name: "Frequently Asked Questions",
        url: "#",
      },
      {
        icon: <MdOutlinePrivacyTip />,
        name: "Privacy Policy",
        url: "#",
      },
      {
        icon: <AiOutlineFileText />,
        name: "Terms of Use",
        url: "#",
      }
    ],
  }
]

export default function Layout() {
  return (
    <>
      <div className="bg-neutral-950 text-white flex-col justify-center align-middle w-full min-h-screen h-fit pb-5">
        {/* <h1 className="text-3xl font-bold underline">AAAAAAAAAAA</h1> */}
        <Navbar options={navOptions} />
        <div className="border-neutral-700 border-2 rounded-3xl shadow-[0_0px_6px] shadow-white min-h-[800px] flex flex-col p-5 mx-28 mt-10 mb-6">
          <Search />
          <Outlet />
        </div>
      </div>
    </>
  )
}