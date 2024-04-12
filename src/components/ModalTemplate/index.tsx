import {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export interface ModalTemplateHandles {
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export default forwardRef(function ModalTemplate({ children }: Props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = ()=> setIsOpen(false)


  useImperativeHandle(ref, () => ({
    toggleModal: () => {
      setIsOpen(!isOpen);
    },
    openModal: () => {
      setIsOpen(true);
    },
    closeModal
  }));

  if (!isOpen) return <></>;

  return (
    <Container>
      <section className="c-modal__main">{children}</section>
      <div className="c-modal__background" onClick={closeModal}/>
    </Container>
  );
});

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  .c-modal__background {
    width: 100%;
    height: 100%;
    background: #0000004c;
  }

  .c-modal__main {
    background: #fff;
    position: absolute;
    padding: 24px;
    border-radius: 8px;
  }
`;
