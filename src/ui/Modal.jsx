import { cloneElement, createContext, useContext, useState } from "react";
import useOutSideClick from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

export const ModalContext = createContext();

function Modal(infos) {
  const { children } = infos;
  const [openName, setOpenName] = useState(false);
  const close = () => setOpenName(false);

  return (
    <ModalContext.Provider value={{ openName, close, setOpenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open(infos) {
  const { children } = infos;
  const { setOpenName } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
      setOpenName((prev) => !prev);
    },
  });
}

const Window = (infos) => {
  const { children } = infos;
  const { openName, close } = useContext(ModalContext);
  const formRef = useOutSideClick(close);

  if (!openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-normal-backdropColor backdrop-blur-[4px]">
      <div
        ref={formRef}
        className="shadow-normal-box_shadow relative w-[90%] max-w-[500px] rounded-lg bg-light-grey_0 p-6 dark:bg-dark-grey_0"
      >
        <button
          onClick={close}
          className="absolute right-4 block rounded-md p-2 text-normal-brand_600 hover:bg-light-grey_100 focus:ring-1 focus:ring-normal-brand_600 dark:text-dark-grey_700 dark:hover:bg-dark-grey_100"
        >
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
