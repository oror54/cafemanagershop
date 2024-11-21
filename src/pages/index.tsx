import Head from "next/head";
import Section01 from "@/components/Layout/Main/Section01";

export default function Home() {
  return (
    <>
      <Head>
        <title>카페사장님을 위한 일 잘하는 매니저 - 카페매니저</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section01 />
      </main>
    </>
  );
}
