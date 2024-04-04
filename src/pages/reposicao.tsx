import Navigation from "@/components/Navigation";
import Table from "@/components/Table";
import TitlePage from "@/components/TitlePage";
import PageContainer from "@/templates/PageContainer";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Pedidos de Reposição - MeuEstoque</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <TitlePage>Pedidos de Reposição</TitlePage>
        <Table/>
      </PageContainer>
    </>
  );
}


