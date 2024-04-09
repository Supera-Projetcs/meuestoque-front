import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?:string
  flex?: number
}

export default function Button({ children, onClick, color, flex }: Props) {
  return <ButtonContainer color={color} onClick={onClick} flex={flex}>{children}</ButtonContainer>;
}

const ButtonContainer = styled.button<{color?: string, flex?:number}>`
  background: ${({color})=> color? color : '#4b4fae'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: ${({flex})=> flex ? flex: 'unset'};
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: 6px;
  height: max-content;
  padding: 10px 12px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    transition: 200ms;
    transform: scale(1.03);
  }
`;
