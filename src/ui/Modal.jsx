import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutSideClick from "../hooks/useOutsideClick";

export const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, close, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { setIsOpen } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: (e) => { e.stopPropagation(); setIsOpen((p) => !p); },
  });
}

function Window({ children }) {
  const { isOpen, close } = useContext(ModalContext);
  const formRef = useOutSideClick(close);
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4
                    bg-black/70 backdrop-blur-md">
      <div
        ref={formRef}
        className="relative w-full max-w-[480px] bg-slate-900 border border-slate-800
                   rounded-2xl p-7 shadow-2xl shadow-black/60"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 flex items-center justify-center w-8 h-8
                     rounded-md text-slate-400 hover:text-white hover:bg-violet-500/10
                     transition-colors duration-200 focus-visible:outline-none
                     focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <HiXMark className="text-lg" />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
