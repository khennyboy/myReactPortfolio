import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoIosGitMerge } from "react-icons/io";

const EachSkill = () => {
    return (
        <>
            <div className="text-6xl md:text-[5rem]" title="Html5">
                <FaHtml5 />
            </div>
            <div className="text-6xl md:text-[5rem]" title="Css3">
                <DiCss3 />
            </div>
            <div className="text-6xl md:text-[5rem]" title="Javascript">
                <IoLogoJavascript />
            </div>
            <div className="text-6xl md:text-[5rem]" title="Tailwindcss">
                <SiTailwindcss />
            </div>
            <div className="text-6xl md:text-[5rem]" title="React">
                <FaReact />
            </div>
            <div className="text-6xl md:text-[5rem]" title="Nextjs">
                <RiNextjsFill />
            </div>
            <div className="text-6xl md:text-[5rem]" title="Git">
                <IoIosGitMerge />
            </div>
        </>
    )
}

export default EachSkill