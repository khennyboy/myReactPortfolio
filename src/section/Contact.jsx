import { LuMessageSquare } from "react-icons/lu"
import Form from "../ui/Form"
import Modal from "../ui/Modal"
import { useContext } from "react"
import { DarkModeContext } from "../pages/DarkmodeProvider"

const Contact = () => {
    const { ref } = useContext(DarkModeContext)
    return (
        <Modal>
            <section className="dark:bg-dark-grey_0 bg-light-grey_50 
         my-[6rem] py-[4rem] lg:py-[6rem] border-light-grey_200 border-[1px] border-solid 
         rounded-[10px] dark:border-dark-grey_200" ref={ref}>
                <p className="text-center text-2xl px-4 mb-4">
                    I would love to hear about your project and how i could help.
                </p>
                <img src="/3d-graphic-designer-showing-thumbs-up-png 1.png" alt="Contact_icon" className="max-w-[40%] w-[300px] mx-auto mb-4" />
                <Modal.Open>
                    <button className="bg-normal-brand_600 text-normal-brand_50 w-[45%] 
                     max-w-[200px] ring-normal-brand_600 focus:ring-1 rounded py-2 ring-offset-2 
                     smallMobile:w-[45%] smallMobile:text-base block mx-auto font-[500]
                      text-center hover:bg-normal-brand_700 dark:ring-offset-dark-grey_50">
                        Contact me! <LuMessageSquare className="inline-block align-middle" />
                    </button>
                </Modal.Open>
            </section>
            <Modal.Window>
                <Form />
            </Modal.Window>
        </Modal>
    )
}

export default Contact