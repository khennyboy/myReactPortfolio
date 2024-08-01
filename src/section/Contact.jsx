import { LuMessageSquare } from "react-icons/lu"
import Form from "../ui/Form"
import Modal from "../ui/Modal"
import { useContext } from "react"
import { DarkModeContext } from "../pages/DarkmodeProvider"

const Contact = () => {
    const { ref } = useContext(DarkModeContext)
    return (
        <Modal>
            <div className="dark:bg-dark-grey_0 bg-light-grey_50" ref={ref}>
                <p>
                    I would love to hear about your project and how i could help.
                </p>
                <img src="/3d-graphic-designer-showing-thumbs-up-png 1.png" alt="" />
                <Modal.Open>
                    <button >
                        Contact me! <span><LuMessageSquare /></span>
                    </button>
                </Modal.Open>
            </div>
            <Modal.Window>
                <Form />
            </Modal.Window>
        </Modal>
    )
}

export default Contact