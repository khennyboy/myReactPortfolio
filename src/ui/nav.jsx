import Theme from "./Theme"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Nav = () => {

    return (
        <nav className="flex flex-col items-center fixed top-8 left-0 right-0 mx-auto gap-3">
            <h3 className="text-3xl leading-7 ">Sheriff</h3>
            <ul className="flex gap-2 ">
                <li>
                    <a href="#"
                        className="hover:bg-light-grey_100 block p-2 
                         rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100">
                        <FaGithub className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <li>
                    <a href="#"
                        className="hover:bg-light-grey_100 block p-2 
                         rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                        dark:hover:bg-dark-grey_100">
                        <FaLinkedin className="w-[1.4rem] h-[1.4rem]" />
                    </a>
                </li>
                <li>
                    <a href="#"
                        className="hover:bg-light-grey_100 block p-2 
                         rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100">
                        <BsTwitterX className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <li>
                    <a href="#"
                        className="hover:bg-light-grey_100 block p-2 
                         rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                         dark:hover:bg-dark-grey_100">
                        <FaInstagram className="w-[1.4rem] h-[1.4rem] " />
                    </a>
                </li>
                <Theme />
            </ul>
        </nav >
    )
}

export default Nav