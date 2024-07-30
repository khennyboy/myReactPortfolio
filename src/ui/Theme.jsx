import { useContext } from "react"
import { DarkModeContext } from "../pages/DarkmodeProvider"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const Theme = () => {
    const { IsDark, toggleDarkMode } = useContext(DarkModeContext)
    return (
        <button onClick={toggleDarkMode}>
            {IsDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>
    )
}

export default Theme