import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ExImage from "./arrow.png";
import ExImage2 from "./Qmark.png";

export default function Home() {
  return (
    <Main>
      <Link href={'/'} passHref>
        <ButtonLink><Image src={ExImage} alt="뒤로가기" /></ButtonLink>
      </Link>
      <span>그룹</span>
      <Link href={'/'} passHref>
        <ButtonLink><Image src={ExImage2} alt="도움말" /></ButtonLink>
      </Link>
    </Main>
  );
}

const Main = styled.div`
  width: 720px;
  line-height: 40px;
  margin-top: 0;
  color: #996633;
  font-weight: bold;
  background: #ffe602;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 60px 600px 60px);
`;

const ButtonLink = styled.a`
  color: #996633;
  width: 20px;
  height: 20px;
  margin: auto;
`;