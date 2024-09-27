import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

function Main({ children }: ModalProps): JSX.Element {
  return (
    <div className=" py-5 px-10 z-40 bg-lightGrey border border-grey rounded-xl">
      {children}
    </div>
  );
}

function Overlay({ children }: ModalProps): JSX.Element {
  return (
    <div className="fixed w-full h-full inset-0  z-30 bg-primary-black flex justify-center items-center ">
      {children}
    </div>
  );
}

function Title({ className, children }: ModalProps): JSX.Element {
  return <h2 className={`text-lg text-center ${className}`}>{children}</h2>;
}

function Description({ className, children }: ModalProps): JSX.Element {
  return <p className={`text-sm text-center ${className}`}>{children}</p>;
}

const Modal = Object.assign(Main, {
  Overlay: Overlay,
  Title: Title,
  Description: Description,
});

export default Modal;
