import { deleteInventory } from "@/services/Inventory";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Button from "../Button";
import ModalTemplate, { ModalTemplateHandles } from "../ModalTemplate";

interface Props {
  idDelete: number;
  onDelete: ()=> void
}

export default forwardRef(function ModalDeleteInventory(
  { idDelete,onDelete }: Props,
  ref
) {
  const modalRef = useRef<ModalTemplateHandles>(null);

  const closeModal = () => modalRef.current?.closeModal();
  const openModal = () => modalRef.current?.openModal();
  const toggleModal = () => modalRef.current?.toggleModal();

  useImperativeHandle(ref, () => ({
    toggleModal,
    openModal,
    closeModal,
  }));

  async function onSubmit(e:any) {
    e.preventDefault();

    try{
        await deleteInventory(idDelete)
        onDelete()
        closeModal()
    }catch(err){
        console.log(err)
    }
  }

  return (
    <ModalTemplate ref={modalRef}>
      <Container>
        <h3 className="c-form__title">Deseja mesmo excluir esse produto?</h3>
        <div className="c-form__row-buttons">
          <Button onClick={closeModal} flex={1}>Cancelar</Button>
          <Button color="red" flex={1} onClick={onSubmit}>Excluir</Button>
        </div>
      </Container>
    </ModalTemplate>
  );
});

const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  .c-form__title {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
  }

  .c-form__row-buttons {
    margin-top: 16px;
    display: flex;
    flex: 1;
    gap: 20px;
  }
`;
