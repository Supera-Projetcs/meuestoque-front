import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props{
    children: ReactNode
}

export default function PageContainer({children}:Props) {
  return (
    <Container>
      <Navigation />

      <main className="c-page__main">{children}</main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  .c-page__main{
    height: 100%;
    min-height: 100vh;
    flex: 1;
    padding:  60px 80px;
  }
`;
