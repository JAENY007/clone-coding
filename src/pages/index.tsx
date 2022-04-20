import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ExImage from "./arrow.png";
import ExImage2 from "./Qmark.png";
import BrowseAll from "../app.feature/group/component/browseAll";

export default function Home() {
  return (
    <Main>
      <Link href="#">
        <Image src={ExImage} layout="responsive" width={20} height={20} />
      </Link>
      <span>그룹</span>
      <Link href="#">
        <Image src={ExImage2} layout="responsive" width={20} height={20} />
      </Link>
    </Main>
  );
}

const Main = styled.div`
  width: 720px;
  height: 40px;
  margin-top: 0;
  color: #996633;
  font-weight: bold;
  background: #ffe602;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 60px 600px 60px);
`;
