import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Header from "@/components/Layout/Header/Header";

//글로벌 css, 공통 레이아웃 , 테마나 상태관리 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 공통 헤더 */}
      <Header />
      <Component {...pageProps} />
    </>
  )
}
