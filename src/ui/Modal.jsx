import { cloneElement, createContext, useContext, useState } from "react"
import useOutSideClick from "../hooks/useOutsideClick"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"

export const ModalContext = createContext()

function Modal(infos) {
    const { children } = infos
    const [openName, setOpenName] = useState(false)
    const close = () => setOpenName(false)

    return (
        <ModalContext.Provider value={{ openName, close, setOpenName }}>
            {children}
        </ModalContext.Provider>
    )
}

function Open(infos) {
    const { children } = infos
    const { setOpenName } = useContext(ModalContext)

    return cloneElement(children, {
        onClick: (e) => {
            e.stopPropagation()
            setOpenName(prev => !prev)
        }
    })
}

const Window = (infos) => {
    const { children } = infos;
    const { openName, close } = useContext(ModalContext);
    const formRef = useOutSideClick(close);

    if (!openName) return null;

    return createPortal(
        <div className="fixed w-full top-0 left-0 z-50 h-screen 
        bg-normal-backdropColor backdrop-blur-[4px]">
            <div ref={formRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-light-grey_0 dark:bg-dark-grey_0 shadow-normal-box_shadow rounded-lg w-[90%] max-w-[500px] p-6">
                <button onClick={close} className="hover:bg-light-grey_100 block p-2 rounded-md
                        focus:ring-normal-brand_600 focus:ring-1 text-normal-brand_600 absolute right-4
                         dark:hover:bg-dark-grey_100 dark:text-dark-grey_700">
                    <HiXMark />
                </button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    )
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal
