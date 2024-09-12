import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-[6rem] md:flex-row md:justify-between ">
      <h3 className="text-3xl leading-7 ">Sheriff</h3>
      <ul className="flex gap-2 ">
        <li>
          <a
            href="https://www.linkedin.com/in/sheriff-abdullateef-kehinde-3b7545249"
            aria-label="github link"
            className="hover:bg-light-grey_100 block p-2 rounded-md
                    focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                     dark:hover:bg-dark-grey_100 dark:text-dark-grey_700"
          >
            <FaGithub className="w-[1.4rem] h-[1.4rem] " />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/khennyboy"
            aria-label="linkedin link"
            className="hover:bg-light-grey_100 block p-2 rounded-md
                    focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                    dark:hover:bg-dark-grey_100 dark:text-dark-grey_700"
          >
            <FaLinkedin className="w-[1.4rem] h-[1.4rem]" />
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="twitter link"
            className="hover:bg-light-grey_100 block p-2 rounded-md
                    focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                     dark:hover:bg-dark-grey_100 dark:text-dark-grey_700"
          >
            <BsTwitterX className="w-[1.4rem] h-[1.4rem] " />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/abidemi4339/?hl=en"
            aria-label="instagram link"
            className="hover:bg-light-grey_100 block p-2 rounded-md
                    focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600
                     dark:hover:bg-dark-grey_100 dark:text-dark-grey_700"
          >
            <FaInstagram className="w-[1.4rem] h-[1.4rem] " />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
