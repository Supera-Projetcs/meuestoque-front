import styled from "styled-components";
import StoreIcon from "/public/assets/icons/store.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <Nav>
      <h1 className="nav__title">
        <Image src={StoreIcon} alt="Logo" width={28} height={28} />
        MeuEstoque
      </h1>

      <Link href={"/"} legacyBehavior>
        <a
          className={`nav__link ${
            router.pathname === "/" ? "nav__link--selected" : ""
          }`}
        >
          Início
        </a>
      </Link>
      <Link href={"/estoque"} legacyBehavior>
        <a
          className={`nav__link ${
            router.pathname === "/estoque" ? "nav__link--selected" : ""
          }`}
        >
          Estoque
        </a>
      </Link>
      <Link href={"/reposicao"} legacyBehavior>
        <a
          className={`nav__link ${
            router.pathname === "/reposicao" ? "nav__link--selected" : ""
          }`}
        >
          Pedidos de reposição
        </a>
      </Link>
      <Link href={"/vendas"} legacyBehavior>
        <a
          className={`nav__link ${
            router.pathname === "/vendas" ? "nav__link--selected" : ""
          }`}
        >
          Vendas
        </a>
      </Link>
      <Link href={"/comprar"} legacyBehavior>
        <a
          className={`nav__link ${
            router.pathname === "/comprar" ? "nav__link--selected" : ""
          }`}
        >
          Comprar
        </a>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  flex: 1;
  background: #26328b;
  height: 100vh;
  position: sticky;
  top: 0;


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
    text-decoration: none;

    &:hover {
      transition: 200ms;
      background: #0000002f;
    }
  }

  .nav__link--selected {
    background: #38419c;
    font-weight: 700;
  }
`;
