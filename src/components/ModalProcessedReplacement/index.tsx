import { updateReplacement } from "@/services/HttpReplacement";
import { deleteInventory, updateQuantitiesInventory } from "@/services/Inventory";
import {
  CustomReplacement,
  Replacement,
  ReplacementUpdate,
} from "@/services/Replacement";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Button from "../Button";
import ModalTemplate, { ModalTemplateHandles } from "../ModalTemplate";

interface Props {
  itemProcessed: CustomReplacement;
  onProcesse: (item: Replacement) => void;
}

export default forwardRef(function ModalProcessedReplacement(
  { itemProcessed, onProcesse }: Props,
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

  async function onSubmit(e: any) {
    e.preventDefault();

    try {
      const new_item: ReplacementUpdate = {
        id: itemProcessed.id,
        quantidade: itemProcessed.quantidade,
        produto: itemProcessed.produto
          ? itemProcessed.produto.id.toString()
          : "",
        fornecedor: itemProcessed.fornecedor,
        status: "Processado",
      };

      const attProduct = [{
        id: itemProcessed.produto
        ? itemProcessed.produto.id
        : 0,
        quantity: itemProcessed.quantidade
      }]
      const res = await updateReplacement(new_item);
      await updateQuantitiesInventory(attProduct)
      onProcesse(res.data);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ModalTemplate ref={modalRef}>
      <Container>
        <h3 className="c-form__title">Quer processar o pedido ?</h3>
        <div className="c-form__row-buttons">
          <Button onClick={closeModal} flex={1}>
            Fechar
          </Button>
          <Button color="green" flex={1} onClick={onSubmit}>
            Processar
          </Button>
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
