import Button from "@/components/Button";
import ModalCancelReplacement from "@/components/ModalCancelReplacement";
import ModalCreateReplacement from "@/components/ModalCreateReplacement";
import ModalDeleteReplacement from "@/components/ModalDeleteReplacement";
import ModalProcessedReplacement from "@/components/ModalProcessedReplacement";
import { ModalTemplateHandles } from "@/components/ModalTemplate";
import Table from "@/components/Table";
import TitlePage from "@/components/TitlePage";
import { getInventoysById, getInventoysByIds } from "@/services/Inventory";
import {
  CustomReplacement,
  Replacement,
  ReplacementService,
} from "@/services/Replacement";
import PageContainer from "@/templates/PageContainer";
import { formatedDate } from "@/utils/formatedDate";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import styled from "styled-components";

import CloseIcon from "/public/assets/icons/close-circle.svg";
import CheckIcon from "/public/assets/icons/tick-circle.svg";
import TrashIcon from "/public/assets/icons/trash.svg";

export default function Home({ results }: any) {
  const modalDeleteRef = useRef<ModalTemplateHandles>(null);
  const modalCreateRef = useRef<ModalTemplateHandles>(null);
  const modalProcessedRef = useRef<ModalTemplateHandles>(null);
  const modalCancelRef = useRef<ModalTemplateHandles>(null);
  const [replacements, setReplacements] = useState<CustomReplacement[]>([]);
  const [itemCancel, setItemCancel] = useState<CustomReplacement>(
    {} as CustomReplacement
  );
  const [itemProcessed, setItemProcessed] = useState<CustomReplacement>(
    {} as CustomReplacement
  );
  const [idDelete, setIdDelete] = useState<number>(0);
  useMemo(() => {
    results && getData();
  }, []);

  function valideteProduto(type: string) {
    return ["number", "string"].includes(typeof type);
  }

  async function getData() {
    const ids = results
      .map((item: Replacement, index: number) => {
        if (item.produto && valideteProduto(item.produto)) {
          return `${index != 0 ? "," : ""}` + item.produto;
        } else {
          return "";
        }
      })
      .join("");

    if (ids) {
      const productsRes = await getInventoysByIds(ids);
      const new_results = results.map((item: Replacement, index: number) => {
        if (["number", "string"].includes(typeof item.produto)) {
          const product = productsRes.data.find(
            (product: any) => product.id == item.produto
          );
          item.produto = product;
        }
        return item;
      });
      setReplacements(new_results);
    }
  }

  async function productByReplacement(item: Replacement) {
    let new_item = item;
    const { data } = await getInventoysById(item.produto);
    new_item.produto = data;

    return new_item;
  }

  async function addReplacement(item: Replacement) {
    const new_item = await productByReplacement(item);
    setReplacements([...replacements, new_item as any]);
  }

  async function updateReplacement(item: Replacement) {
    const new_item: any = await productByReplacement(item);
    const index = replacements.findIndex((item) => item.id == new_item.id);

    if (index != -1) {
      let new_array = [...replacements];
      new_array[index] = new_item;
      setReplacements(new_array);
    }
  }
  function deleteReplacement() {
    setReplacements(replacements.filter((item) => item.id != idDelete));
  }

  return (
    <>
      <Head>
        <title>Pedidos de Reposição - MeuEstoque</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <ModalCreateReplacement
          ref={modalCreateRef}
          setReplacements={addReplacement}
        />
        <ModalCancelReplacement
          ref={modalCancelRef}
          itemCancel={itemCancel}
          onCancel={updateReplacement}
        />
        <ModalProcessedReplacement
          ref={modalProcessedRef}
          itemProcessed={itemProcessed}
          onProcesse={updateReplacement}
        />
        <ModalDeleteReplacement
          ref={modalDeleteRef}
          idDelete={idDelete}
          onDelete={deleteReplacement}
        />

        <TitlePage>Pedidos de Reposição</TitlePage>
        <Row>
          <TitlePage>Estoque</TitlePage>
          <Button onClick={() => modalCreateRef.current?.openModal()}>
            Novo pedido
          </Button>
        </Row>
        <Table
          header={[
            "ID",
            "Fornecedor",
            "Produto",
            "Quantidade",
            "Status",
            "Data do pedido",
            "",
          ]}
        >
          {replacements.map((item) => (
            <tr className="c-table__row" key={item.id}>
              <td className="c-table__row__data">{item.id}</td>
              <td className="c-table__row__data">{item.fornecedor}</td>
              <td className="c-table__row__data">{item.produto?.name}</td>
              <td className="c-table__row__data">{item.quantidade}</td>
              <td className="c-table__row__data">{item.status}</td>
              <td className="c-table__row__data">{formatedDate(item.data_pedido)}</td>
              <td className="c-table__row__data" style={{ width: "5%" }}>
                {item.status == "Pendente" ? (
                  <RowButtons>
                    <Button
                      onClick={() => {
                        setItemProcessed(item);
                        modalProcessedRef.current?.openModal();
                      }}
                    >
                      <Image src={CheckIcon} alt="Confirmar" />
                    </Button>
                    <Button
                      color="red"
                      onClick={() => {
                        setItemCancel(item);
                        modalCancelRef.current?.openModal();
                      }}
                    >
                      <Image src={CloseIcon} alt="Cancelar" />
                    </Button>
                  </RowButtons>
                ) : (
                  <Button
                    onClick={() => {
                      setIdDelete(item.id)
                      modalDeleteRef.current?.openModal();
                    }}
                  >
                    <Image src={TrashIcon} alt="Deletar" />
                    Excluir
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </Table>
      </PageContainer>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const service = new ReplacementService();
  const res = await service.getReplacementList();

  return {
    props: res,
  };
}

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const RowButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
