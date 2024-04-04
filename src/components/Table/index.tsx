import styled from "styled-components";

export default function Table() {
  return (
    <TableContainer>
      <thead className="c-table__header">
        <tr className="c-table__row">
          <th className="c-table__row__data">Coluna 1</th>
          <th className="c-table__row__data">Coluna 2</th>
          <th className="c-table__row__data">Coluna 3</th>
        </tr>
      </thead>
      <tbody>
        <tr className="c-table__row">
          <td className="c-table__row__data">Dado 1</td>
          <td className="c-table__row__data">Dado 2</td>
          <td className="c-table__row__data">Dado 3</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__row__data">Dado 4</td>
          <td className="c-table__row__data">Dado 5</td>
          <td className="c-table__row__data">Dado 6</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__row__data">Dado 4</td>
          <td className="c-table__row__data">Dado 5</td>
          <td className="c-table__row__data">Dado 6</td>
        </tr>
        <tr className="c-table__row">
          <td className="c-table__row__data">Dado 4</td>
          <td className="c-table__row__data">Dado 5</td>
          <td className="c-table__row__data">Dado 6</td>
        </tr>
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

  .c-table__header {
    background: #4b4fae;
    color: #fff;
    font-weight: 700;
  }

  .c-table__row {
    height: 56px;

    .c-table__row__data {
      vertical-align: middle;
      align-items: center;
      padding: 0px 24px;
    }

    &:nth-child(even) {
      background-color: #e3e4ff;
    }
  }

  tbody {
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
