import Link from "next/link";
import styled from "styled-components";

const NavBar = () =>  {
  return (
    <Navigation>
      <TabMenu>
        <Link href={""}><a>모아보기</a></Link>
        <Link href={""}><a>피드</a></Link>
      </TabMenu>
    </Navigation>
  );
}

export default NavBar;

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  border-bottom: 1px solid #c2c2c2;
  
`;

const Navigation = styled.nav`
  background: white;
`;