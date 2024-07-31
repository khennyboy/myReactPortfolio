import { LuMessageSquare } from "react-icons/lu"
import Form from "../ui/Form"
import Modal from "../ui/Modal"

const Contact = () => {
    return (
        <Modal>
            <div className="dark:bg-dark-grey_0 bg-light-grey_50">
                <p>
                    I would love to hear about your project and how i could help.
                </p>
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