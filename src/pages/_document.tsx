import { Html, Head, Main, NextScript } from "next/document";

// lang 설정 및 서드파티 스크립트, seo메타 추가
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}