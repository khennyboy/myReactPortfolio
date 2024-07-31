import { useContext } from "react"
import { DarkModeContext } from "../pages/DarkmodeProvider"
import { HiOutlineSun } from "react-icons/hi2";
import { LuMoonStar } from "react-icons/lu";

const Theme = () => {
    const { IsDark, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <li>
            <button onClick={toggleDarkMode}
                className="hover:bg-light-grey_100 block p-2  rounded-md
                        focus:ring-normal-brand_600 focus:ring-1
                        text-normal-brand_600  dark:hover:bg-dark-grey_100">
                {IsDark ? <HiOutlineSun className="w-[1.4rem] h-[1.4rem] " /> : <LuMoonStar className="w-[1.4rem] h-[1.4rem] " />}
            </button>
        </li>

    )
}

export default Theme