import { MdFileDownload } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";

const Header = () => {
    return (

        <div className="pt-[7rem]  h-full 
         flex flex-col justify-evenly items-center">
            <div>
                <h1 className="text-center text-2xl mb-12">Nice to meet you! I am <br className="hidden" />
                    Sheriff Abdullateef
                </h1>
                <div className="flex justify-center gap-4">

                    <a href="/sheriffResume.pdf" download='sheriff Resume'
                        className="py-2 bg-normal-brand_600 text-normal-brand_50 w-[40%] rounded
                    focus:ring-1 ring-offset-2 hover:bg-normal-brand_700
                     focus:ring-normal-brand_600 block text-center">
                        Resume <MdFileDownload className="inline-block" />
                    </a>

                    <button className="bg-normal-brand_600 text-normal-brand_50 w-[40%] 
                     ring-normal-brand_600 focus:ring-1 rounded py-2 ring-offset-2 
                      text-center hover:bg-normal-brand_700 ">
                        Contact me <LuMessageSquare className="inline-block" />
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