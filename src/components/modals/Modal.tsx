import { ReactNode } from "react";
import { animated, useTransition } from "react-spring";

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
}

function Main({ children, className }: ModalProps): JSX.Element {
  return (
    <div
      className={`py-5 px-10 z-40 bg-lightGrey border border-grey rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Overlay({ children, isOpen }: ModalProps): JSX.Element {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 180, friction: 20, duration: 150 },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed w-full h-full inset-0 z-30 bg-primary-black bg-opacity-50 flex justify-center items-center"
            >
              {children}
            </animated.div>
          )
      )}
    </>
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
