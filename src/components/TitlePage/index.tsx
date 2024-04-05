import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default function TitlePage({ children }: Props) {
  return <Title>{children}</Title>;
}

const Title = styled.h2`
  color: #0c0c0c;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`;
