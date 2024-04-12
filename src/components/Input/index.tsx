import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  err?: string;
}

export default function Input({ label, type, onChange, err,value }: Props) {
  return (
    <Container err={!!err}>
      <span className="c-input__label">{label}:</span>

      <input
        className="c-input__input"
        value={value}
        type={type}
        onChange={onChange}
      />

      {err && <span className="c-input__err">{err}</span>}
    </Container>
  );
}

const Container = styled.label<{ err?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 275px;
  font-family: Inter;

  .c-input__label {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ err }) => (err ? "red" : "#000")};
    margin-left: 10px;
  }

  .c-input__input {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: 1px solid ${({ err }) => (err ? "red" : "#b6b6b6")};
    border-radius: 6px;

    &:focus {
      border: 1px solid #4b4fae;
    }
  }

  .c-input__err {
    color: red;
    font-size: 13px;
  }
`;
