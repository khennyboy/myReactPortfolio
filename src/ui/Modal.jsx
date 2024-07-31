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
        <div>
            <div ref={formRef}>
                <button onClick={close}>
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
