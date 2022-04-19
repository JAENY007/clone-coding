import styled from "styled-components";
import Image from "next/image";
import ExImage from "./arrow.png";
import ExImage2 from "./Qmark.png";

export default function Home() {
  return (
    <Main>
      <a href="#">
        <Image src={ExImage} width={20} height={20} />
      </a>
      <span>그룹</span>
      <a href="#">
        <Image src={ExImage2} width={20} height={20} />
      </a>
    </Main>
  );
}

const Main = styled.div`
  width: 720px;
  line-height: 40px;
  margin-top: 0;
  color: #996633;
  font-weight: bold;
  background: yellow;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 60px 600px 60px);
`;
