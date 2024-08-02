import { MdFileDownload } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { useContext } from "react";
import { DarkModeContext } from "../pages/DarkmodeProvider";

const Header = () => {
    const { ref } = useContext(DarkModeContext)
    function handleScroll() {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className="pt-[5rem]  h-full 
         flex flex-col justify-evenly items-center">
            <div>
                <h1 className="text-center text-2xl mb-6 leading-7">Nice to meet you! I am
                    Sheriff Abdullateef
                </h1>
                <p className="text-center mb-6 leading-tight ">
                    Based in Nigeria, I&#39;m a front end web developer Passionate about building accessible web apps that users love.</p>
                <div className="flex justify-center gap-4">
                    <a href="/sheriffResume.pdf" download='sheriff Resume'
                        className="py-2 bg-normal-brand_600 text-normal-brand_50 w-[40%] 
                        max-w-[200px] rounded dark:ring-offset-dark-grey_50 smallMobile:w-[45%]
                        focus:ring-1 ring-offset-2 hover:bg-normal-brand_700 smallMobile:text-base
                     focus:ring-normal-brand_600 block text-center font-[500]">
                        Resume <MdFileDownload className="inline-block align-middle" />
                    </a>

                    <button onClick={handleScroll} className="bg-normal-brand_600 text-normal-brand_50 w-[40%] 
                     max-w-[200px] ring-normal-brand_600 focus:ring-1 rounded py-2 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center hover:bg-normal-brand_700 dark:ring-offset-dark-grey_50 font-[500]">
                        Contact me <LuMessageSquare className="inline-block align-middle" />
                    </button>
                </div>
            </div >
            <img src="/myimageResize (1).webp" alt="Dev Image"
                className="max-w-[70%] w-[300px] aspect-square object-cover 
                rounded-[50%] block flex-shrink-0" />
        </div >

    )
}

export default Header