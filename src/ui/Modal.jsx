import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutSideClick from "../hooks/useOutsideClick";
import { useFocusTrap } from "../hooks/useFocusTrap";

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
    onClick: (e) => {
      e.stopPropagation();
      setIsOpen((p) => !p);
    },
  });
}

function Window({ children }) {
  const { isOpen, close } = useContext(ModalContext);
  const formRef = useOutSideClick(close);

  useFocusTrap(formRef, isOpen, close);
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md">
      <div
        ref={formRef}
        className="max-w-120 relative w-full rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-2xl shadow-black/60"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors duration-200 hover:bg-violet-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
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
