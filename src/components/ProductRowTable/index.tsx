import { getInventoysByIds, InvertoryInterface } from "@/services/Inventory";
import { SalesProduct } from "@/services/Sales";
import { useEffect, useState } from "react";

interface Props {
  list: SalesProduct[];
}

export default function ProductRowTable({ list }: Props) {
  const [names, setNames] = useState([]);
  useEffect(() => {
    const ids = list.map((item) => item.id_produto).join(",");
    console.log(ids)
    getInventoysByIds(ids).then((res) => {
      const listaFormatada = res.data.map(
        (item: any) => `${item.id} - ${item.name}`
      );
      setNames(listaFormatada);
    });
  }, []);

  return (
    <td className="c-table__row__data">
      {names.map((item) => (
        <>
          {item}
          <br />
        </>
      ))}
    </td>
  );
}
