import styled from "styled-components";
import TitlePage from "../TitlePage";

export default function Dashboard() {
  return (
    <>
      <GridDashboard>
        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Total de produtos:</p>
          <p className="c-dashboard__card__value">78</p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Total de vendas:</p>
          <p className="c-dashboard__card__value">78</p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Valor total de vendas:</p>
          <p className="c-dashboard__card__value">78</p>
        </section>

        <section className="c-dashboard__card">
          <p className="c-dashboard__card__title">Pedidos de reposição:</p>
          <p className="c-dashboard__card__value">78</p>
        </section>
      </GridDashboard>

      <TitleDashboard>Produtos mais vendidos:</TitleDashboard>
    </>
  );
}

const GridDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  .c-dashboard__card {
    padding: 16px;
    background: #fff;
    border-radius: 6px;
    font-family: Inter;

    .c-dashboard__card__title {
      font-weight: 500;
      font-size: 16px;
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
