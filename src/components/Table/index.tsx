import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  header: string[];
  children: ReactNode;
}

export default function Table({ header, children }: Props) {
  return (
    <TableContainer>
      <thead className="c-table__header">
        <tr className="c-table__row">
          {header.map((item, index) => (
            <th className="c-table__row__data" key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  width: 100%;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;

  .c-table__header {
    background: #4b4fae;
    color: #fff;
    font-weight: 700;

    .c-table__row__data + .c-table__row__data  {
      border-left: 1px solid #fff;
    }
  }

  .c-table__row {
    height: 56px;

    .c-table__row__data {
      vertical-align: middle;
      text-align: left;
      padding: 0px 24px;
    }

    &:nth-child(even) {
      background-color: #e3e4ff;
    }
  }

  tbody {

    .c-table__row__data:last-child{
      max-width: max-content;
      width: max-content;
    }
    .c-table__row__data:nth-child(even) {
      background-color: #fafafa;
    }

    .c-table__row:nth-child(even) {
      background-color: #eaebff;

      .c-table__row__data:nth-child(even) {
        background-color: #dfe0fc;
      }
    }
  }
`;
