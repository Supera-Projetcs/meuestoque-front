import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: Props) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  background: #4b4fae;
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
