import Theme from "./Theme"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Nav = () => {

    return (
        <nav className="flex flex-col items-center absolute top-8 left-0 right-0 mx-auto gap-3">
            <h3 className="text-3xl leading-7 ">Sheriff</h3>
            <ul className="flex gap-2 ">
                <li>
                    <a href="https://github.com/khennyboy"
                        aria-label="githublink"
                        className="hover:bg-light-grey_100 block p-2 rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                        <FaGithub className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249"
                        aria-label="linkedin link"
                        className="hover:bg-light-grey_100 block p-2 rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                        dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                        <FaLinkedin className="w-[1.4rem] h-[1.4rem]" />
                    </a>
                </li>
                <li>
                    <a href="https://www.https://twitter.com/Abdullatee28061"
                        aria-label="twitter link"
                        className="hover:bg-light-grey_100 block p-2 rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                        <BsTwitterX className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/abidemi4339/?hl=en"
                        aria-label="instagram link"
                        className="hover:bg-light-grey_100 block p-2 rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                        <FaInstagram className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <Theme />
            </ul>
        </nav >
    )
}

export default Nav