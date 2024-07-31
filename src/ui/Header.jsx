import { MdFileDownload } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";

const Header = () => {
    return (
        <div>
            <div>
                <h1>Nice to meet you! I am <br />
                    Sheriff Abdullateef
                </h1>
                <button>
                    <a href="/sheriffResume.pdf" download='sheriff Resume'>
                        Resume <span><MdFileDownload /></span>
                    </a>
                </button>
                <button>
                    Contact me <span><LuMessageSquare /></span>
                </button>
            </div>
            <div>
                <img src="/myimageResize (1).webp" alt="Dev Image" />
            </div>
        </div>
    )
}

export default Header