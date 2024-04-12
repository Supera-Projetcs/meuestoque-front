import { getAllInventorys, InvertoryInterface } from "@/services/Inventory";
import { createSale } from "@/services/Sales";
import { formatPrice } from "@/utils/formatedDate";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import TitlePage from "../TitlePage";

interface BuyInterface {
  product: InvertoryInterface;
  quantity: number;
}

export default function GridBuy() {
  const [inventorys, setInventorys] = useState<InvertoryInterface[]>([]);
  const [productsBuy, setProductsBuy] = useState<BuyInterface[]>([]);

  useEffect(() => {
    getAllInventorys().then((res) => setInventorys(res.data));
  }, []);

  function onChangeQuantity(index: number, new_value: number) {
    let new_array = [...productsBuy];
    new_array[index].quantity = new_value;

    setProductsBuy(new_array);
  }

  function totalValue() {
    let value = 0;

    productsBuy.map((item) => {
      value += item.product.price * item.quantity;
    });

    return formatPrice(value);
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    const produtos = productsBuy.map((item) => {
      return {
        id_produto: item.product.id,
        unit_value: Number(item.product.price),
        quantity: item.quantity,
      };
    });

    const res = await createSale({produtos: produtos})
    setProductsBuy([])
  }

  return (
    <>
      <TitlePage>Produtos:</TitlePage>
      <ContainerGrid>
        {inventorys.map((item) => (
          <Card>
            <p className="c-card__title">{item.name}</p>
            <p className="c-card__price">{formatPrice(item.price)}</p>
            <Button
              onClick={() =>
                setProductsBuy([...productsBuy, { product: item, quantity: 1 }])
              }
            >
              Comprar
            </Button>
          </Card>
        ))}
      </ContainerGrid>

      <TitlePage>Carrinho:</TitlePage>
      <ContainerBuy>
        {productsBuy.map((item, index) => (
          <Card>
            <p className="c-card__title">{item.product.name}</p>
            <p className="c-card__price">
              Valor total: {formatPrice(item.product.price * item.quantity)}
            </p>

            <Input
              type="number"
              label="Quantidade"
              value={item.quantity}
              onChange={(e) => onChangeQuantity(index, Number(e.target.value))}
            />
          </Card>
        ))}

        <p className="total-value">
          Valor total:<b> {totalValue()} </b>
        </p>
        <Button onClick={onSubmit}>Comprar</Button>
      </ContainerBuy>
    </>
  );
}

const ContainerGrid = styled.div`
  margin: 32px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
`;

const Card = styled.section`
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: Inter;

  .c-card__title {
    font-size: 18px;
    font-weight: 600;
  }

  .c-card__price {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ContainerBuy = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  max-width: max-content;
  gap: 24px;

  .total-value {
    font-family: Inter;
    font-weight: 500;
    font-size: 24px;

    b {
      font-weight: 700;
    }
  }
`;
