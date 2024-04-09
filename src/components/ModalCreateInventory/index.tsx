import styled from "styled-components";
import ModalTemplate, { ModalTemplateHandles } from "../ModalTemplate";
import Input from "../Input";
import Button from "../Button";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  InvertoryInterface,
  createInventory,
  InventoryModel,
  editInventory,
} from "@/services/Inventory";

interface Props {
  setInventory: (data: InvertoryInterface) => void;
  editInventoryData?: InvertoryInterface;
}

const defaultData = { name: "", quantity: "", price: "" };

export default forwardRef(function ModalCreateInventory(
  { setInventory, editInventoryData }: Props,
  ref
) {
  const modalRef = useRef<ModalTemplateHandles>(null);
  const [data, setData] = useState<{
    name: string;
    quantity: number | string;
    price: number | string;
  }>(defaultData);
  const [err, setErr] = useState({ name: "", quantity: "", price: "" });

  useEffect(() => {
    if (editInventoryData)
      setData({
        name: editInventoryData?.name,
        quantity: editInventoryData?.quantity,
        price: editInventoryData?.price,
      });
  }, [editInventoryData]);

  const closeModal = () => modalRef.current?.closeModal();
  const openModal = () => {
    setErr({ name: "", quantity: "", price: "" });
    setData(defaultData);
    modalRef.current?.openModal();
  };
  const toggleModal = () => modalRef.current?.toggleModal();

  function validate() {
    let newErr = { name: "", quantity: "", price: "" };

    if (!data.name) newErr = { ...newErr, name: "Campo obrigatório." };
    if (!data.quantity) newErr = { ...newErr, quantity: "Campo obrigatório." };
    if (!data.price) newErr = { ...newErr, price: "Campo obrigatório." };
    setErr(newErr);

    if (newErr.name || newErr.quantity || newErr.price) return true;

    return false;
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    if (validate()) return;

    try {
      const res = editInventoryData
        ? await editInventory(data as InventoryModel, editInventoryData.id)
        : await createInventory(data as InventoryModel);
      setInventory(res.data);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  }

  useImperativeHandle(ref, () => ({
    toggleModal,
    openModal,
    closeModal,
  }));

  return (
    <ModalTemplate ref={modalRef}>
      <Form>
        <h3 className="c-form__title">
          {editInventoryData ? "Editar Produto" : "Novo produto"}
        </h3>

        <Input
          label="Nome"
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          err={err.name}
        />
        <Input
          label="Preço"
          type="number"
          value={data.price}
          onChange={(e) => setData({ ...data, price: Number(e.target.value) })}
          err={err.price}
        />
        <Input
          label="Quantidade"
          type="number"
          value={data.quantity}
          onChange={(e) =>
            setData({ ...data, quantity: Number(e.target.value) })
          }
          err={err.quantity}
        />

        <Button onClick={onSubmit}>
          {editInventoryData ? "Editar" : "Criar produto"}
        </Button>
      </Form>
    </ModalTemplate>
  );
});
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
