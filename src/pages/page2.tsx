export default function Index() {
  return (
    <section style={{ color: "#000" }}>
      {/* 
    1. scroll height가 안먹힌 이유
      body,html {
        height: 100%로 고정이 되어있었음.
        고정제거. min-hegight:100%로 수정 (global.css의 223번줄 )
      } 
    

    2. 구조변경
        1. src>common: Layout에 대한 Header,Footer,Gnb,Lnb 같은 것들
        2. components: Table, Card, Pagination와 같이 page마다 계속 써야하는 것들
        3. scr/assets > pulic폴더로 이동. 
          alias로 쓰는 법: tsconfig.json에서 paths부분에 환경설정으로 $표시 추가.
          public폴더에 접근하는 법:  import testImage from '$/images/../...'

     3. type Header파일 참고.
        공통으로 쓰는 type들은 한곳에 정리해놓는게 관리에서 좋음.   

       */}
    </section>
  );
}
