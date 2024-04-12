import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label: string;
  options: Option[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string | number;
  err?: string;
}

export default function Select({ label, options, onChange, value, err }: Props) {
  return (
    <Container err={!!err}>
      <span className="c-select__label">{label}:</span>

      <select
        className="c-select__select"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {err && <span className="c-select__err">{err}</span>}
    </Container>
  );
}

const Container = styled.label<{ err?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 275px;
  font-family: Inter;

  .c-select__label {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ err }) => (err ? "red" : "#000")};
    margin-left: 10px;
  }

  .c-select__select {
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

  .c-select__err {
    color: red;
    font-size: 13px;
  }
`;
