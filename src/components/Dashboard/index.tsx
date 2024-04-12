import { getDashboard, getReplacement } from "@/services/HttpReplacement";
import {
  getInventoysById,
  InvertoryInterface,
  totalInventorys,
} from "@/services/Inventory";
import { getSalesStats } from "@/services/Sales";
import { formatPrice } from "@/utils/formatedDate";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TitlePage from "../TitlePage";

interface BestSelling extends InvertoryInterface {
  quantity_sale: number;
}
interface BestReplacement extends InvertoryInterface {
  quantity_replacement: number;
}

export default function Dashboard() {
  const [data, setData] = useState({
    totalInventorys: 0,
    totalSales: 0,
    totalValueSales: 0,
    totalReplacements: 0,
  });

  const [bestSellingProduct, setBestSellingProduct] = useState<BestSelling>(
    {} as BestSelling
  );

  const [dashReplacement, setDashReplacement] = useState<BestReplacement>(
    {} as BestReplacement
  );

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resProduct = await totalInventorys();
    const resSales = await getSalesStats();
    const resReplacement = await getReplacement();

    setData({
      totalInventorys: resProduct.data.totalInventoryCount,
      totalSales: resSales.data.total_vendas,
      totalValueSales: resSales.data.total_vendido,
      totalReplacements: resReplacement.data.results.length,
    });

    const resBestProduct = await getInventoysById(
      resSales.data.produto_mais_vendido.id_produto
    );

    const resDashReplacement = await getDashboard();

    const resBestReplcement = await getInventoysById(
      resDashReplacement.data.produto
    );

    setBestSellingProduct({
      ...resBestProduct.data,
      quantity_sale: resSales.data.produto_mais_vendido.quantidade_vendida,
    });

    setDashReplacement({
      ...resBestReplcement.data,
      quantity_replacement: resDashReplacement.data.quantidade,
    });
  }

  return (
    <>
      <GridDashboard>
        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Total de produtos:</p>
          <p className="c-dashboard__card__value">{data.totalInventorys}</p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Total de vendas:</p>
          <p className="c-dashboard__card__value">{data.totalSales}</p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Valor total de vendas:</p>
          <p className="c-dashboard__card__value">
            {formatPrice(data.totalValueSales)}
          </p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Pedidos de reposição:</p>
          <p className="c-dashboard__card__value">{data.totalReplacements}</p>
        </section>
      </GridDashboard>

      <TitleDashboard>Produto mais vendidos:</TitleDashboard>

      <Card>
        <p className="c-card__title">
          {bestSellingProduct.id} - {bestSellingProduct.name}
        </p>
        <p className="c-card__text">
          <b>Preço: </b>
          {formatPrice(bestSellingProduct.price)}
        </p>
        <p className="c-card__text">
          <b>Quantidade no estoque: </b>
          {bestSellingProduct.quantity}
        </p>
        <p className="c-card__text">
          <b>Quantidade vendida: </b>
          {bestSellingProduct.quantity_sale}
        </p>
      </Card>
      <TitleDashboard>Produto com mais reposição:</TitleDashboard>
      <Card>
        <p className="c-card__title">
          {dashReplacement.id} - {dashReplacement.name}
        </p>
        <p className="c-card__text">
          <b>Preço: </b>
          {formatPrice(dashReplacement.price)}
        </p>
        <p className="c-card__text">
          <b>Quantidade no estoque: </b>
          {dashReplacement.quantity}
        </p>
        <p className="c-card__text">
          <b>Quantidade reposta: </b>
          {dashReplacement.quantity_replacement}
        </p>
      </Card>
    </>
  );
}

const GridDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  .c-dashboard__card {
    padding: 20px 16px;
    background: #fff;
    border-radius: 6px;

    font-family: Inter;

    .c-dashboard__card__title {
      font-weight: 500;
      font-size: 17px;
      margin-bottom: 12px;
    }

    .c-dashboard__card__value {
      font-weight: 700;
      font-size: 40px;
      color: #26328b;
    }
  }
`;

const TitleDashboard = styled.h3`
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  margin: 40px 0 24px;
`;

const Card = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .c-card__title {
    font-family: Inter;
    font-weight: 700;
    font-size: 28px;
  }

  .c-card__text {
    font-family: Inter;
    font-size: 18px;
    color: #383838;

    b {
      font-weight: 600;
    }
  }
`;
