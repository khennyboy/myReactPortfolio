import Theme from "./Theme"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Nav = () => {

    return (
        <nav>
            <h3>Sheriff</h3>
            <ul>
                <li>
                    <a href="https://github.com/khennyboy">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://www.https://twitter.com/Abdullatee28061">
                        <BsTwitterX />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/abidemi4339/?hl=en">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <Theme />
        </nav>
    )
}

export default Nav