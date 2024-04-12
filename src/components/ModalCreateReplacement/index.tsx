import { createReplacement } from "@/services/HttpReplacement";
import { getAllInventorys, InvertoryInterface } from "@/services/Inventory";
import { Replacement } from "@/services/Replacement";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import ModalTemplate, { ModalTemplateHandles } from "../ModalTemplate";
import Select from "../Select";

interface Props{
    setReplacements: (e: Replacement) => void
}

export default forwardRef(function ModalCreateReplacement({setReplacements}:Props, ref) {
  const modalRef = useRef<ModalTemplateHandles>(null);
  const [inventorys, setInventorys] = useState<InvertoryInterface[]>([]);
  const [data, setData] = useState({
    produto: 0,
    quantidade: 0,
    fornecedor: "",
    status: "Pendente",
  });
  const [err, setErr] = useState({ produto: "", quantidade: "", fornecedor: "" });

  useEffect(() => {
    getAllInventorys().then((res) => setInventorys(res.data));
  }, []);

  const closeModal = () => modalRef.current?.closeModal();
  const openModal = () => modalRef.current?.openModal();
  const toggleModal = () => modalRef.current?.toggleModal();

  useImperativeHandle(ref, () => ({
    toggleModal,
    openModal,
    closeModal,
  }));

  function validate() {
    let newErr = { produto: "", quantidade: "", fornecedor: "" };

    if (!data.produto) newErr = { ...newErr, produto: "Campo obrigatório." };
    if (!data.quantidade) newErr = { ...newErr, quantidade: "Campo obrigatório." };
    if (!data.fornecedor) newErr = { ...newErr, fornecedor: "Campo obrigatório." };
    setErr(newErr);

    if (newErr.fornecedor || newErr.quantidade || newErr.produto) return true;

    return false;
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    if(validate()) return
    
    try{
       const res = await createReplacement(data)
       setReplacements(res.data)
       closeModal()
    }catch(err){
        console.log(err)
    }
  }

  return (
    <ModalTemplate ref={modalRef}>
      <Container>
        <h3 className="c-form__title ">Novo Pedido</h3>
        <Input
          label="Fornecedor"
          type="text"
          err={err.fornecedor}
          onChange={(e) => setData({ ...data, fornecedor: e.target.value })}
          />
        <Select
          label="Produto"
          err={err.produto}
          options={[{value: -1, label: ""}, ...inventorys.map((item) => {
              return { value: item.id, label: `${item.id} - ${item.name}` };
            })]}
            onChange={(e) =>
                setData({ ...data, produto: Number(e.target.value) })
            }
            />
        <Input
          label="Quantidade"
          type="number"
          err={err.quantidade}
          onChange={(e) =>
            setData({ ...data, quantidade: Number(e.target.value) })
        }
        />
        <Select
          label="Status"
      
          options={[
              { label: "Pendente", value: "Pendente" },
              { label: "Processado", value: "Processado" },
              { label: "Cancelado", value: "Cancelado" },
          ]}
          onChange={(e) => setData({ ...data, status: e.target.value })}
        />

        <Button onClick={onSubmit}>Enviar pedido</Button>
      </Container>
    </ModalTemplate>
  );
});

const Container = styled.form`
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
