import styled from "styled-components";
import StoreIcon from '/public/assets/icons/store.svg'
import Image from "next/image";
export default function Navigation() {
  return (
    <Nav>
      <h1 className="nav__title">
        <Image src={StoreIcon} alt="Logo" width={28} height={28}/>
        MeuEstoque
        </h1>
      <a className="nav__link nav__link--selected">Estoque</a>
      <a className="nav__link">Pedidos de reposição</a>
      <a className="nav__link">Vendas</a>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  flex: 1;
  background: #26328b;
  min-height: 100vh;
  height: 100%;


  .nav__title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 30px 24px;
  }

  .nav__link {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 12px 24px;
    cursor: pointer;
    transition: 200ms;
    
   

    &:hover{
        transition: 200ms;
        background: #0000002f;
    }
  }

  .nav__link--selected{
        background: #38419c;
        font-weight: 700;
    }
`;
