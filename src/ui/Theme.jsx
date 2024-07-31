import { useContext } from "react"
import { DarkModeContext } from "../pages/DarkmodeProvider"
import { HiOutlineSun } from "react-icons/hi2";
import { LuMoonStar } from "react-icons/lu";

const Theme = () => {
    const { IsDark, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <button onClick={toggleDarkMode}>
            {IsDark ? <HiOutlineSun /> : <LuMoonStar />}
        </button>
    )
}

export default Theme