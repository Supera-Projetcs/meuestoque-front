import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import ModalCreateInventory from "@/components/ModalCreateInventory";
import ModalDeleteInventory from "@/components/ModalDeleteInventory";
import { ModalTemplateHandles } from "@/components/ModalTemplate";
import Navigation from "@/components/Navigation";
import Table from "@/components/Table";
import TitlePage from "@/components/TitlePage";
import { InvertoryInterface, getAllInventorys } from "@/services/Inventory";
import PageContainer from "@/templates/PageContainer";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EditImg from "/public/assets/icons/edit.svg";
import TrashImg from "/public/assets/icons/trash.svg";

export default function Home() {
 
  return (
    <>
      <Head>
        <title>MeuEstoque</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
       <Dashboard/>
      </PageContainer>
    </>
  );
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
