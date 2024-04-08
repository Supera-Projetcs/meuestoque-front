import styled from "styled-components";
import ModalTemplate, { ModalTemplateHandles } from "../ModalTemplate";
import Input from "../Input";
import Button from "../Button";
import {  forwardRef, useImperativeHandle, useRef, useState } from "react";
import {  InvertoryInterface, createInventory } from "@/services/Inventory";


interface Props{
  setInventory: (data: InvertoryInterface) => void
}

export default forwardRef( function ModalCreateInventory({setInventory}:Props , ref) {
  const modalRef = useRef<ModalTemplateHandles>(null)
  const [data, setData] = useState({ name: "", quantity: 0, price: 0 });
  const [err, setErr] = useState({ name: "", quantity: "", price: "" });

  const closeModal=() => modalRef.current?.closeModal()
  const openModal =() => modalRef.current?.openModal()
  const toggleModal =() => modalRef.current?.toggleModal()

  async function onSubmit(e: any) {
    e.preventDefault();

    let newErr = { name: "", quantity: "", price: "" };

    if (!data.name) newErr = { ...newErr, name: "Campo obrigatório." };
    if (!data.quantity) newErr = { ...newErr, quantity: "Campo obrigatório." };
    if (!data.price) newErr = { ...newErr, price: "Campo obrigatório." };
    setErr(newErr);

    if (newErr.name || newErr.quantity || newErr.price) return;

    try {
      const res = await createInventory(data);
      setInventory(res.data)
      closeModal()
    } catch (err) {
      console.log(err);
    }
  }



  useImperativeHandle(ref, () => ({
    toggleModal,
    openModal,
    closeModal
  }));

 

  return (
    <ModalTemplate ref={modalRef}>
      <Form>
        <h3 className="c-form__title">Novo produto</h3>

        <Input
          label="Nome"
          type="text"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          err={err.name}
        />
        <Input
          label="Preço"
          type="number"
          onChange={(e) => setData({ ...data, price: Number(e.target.value) })}
          err={err.price}
        />
        <Input
          label="Quantidade"
          type="number"
          onChange={(e) =>
            setData({ ...data, quantity: Number(e.target.value) })
          }
          err={err.quantity}
        />

        <Button onClick={onSubmit}>Criar produto</Button>
      </Form>
    </ModalTemplate>
  );
}
)
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .c-form__title {
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 12px;
  }
`;
