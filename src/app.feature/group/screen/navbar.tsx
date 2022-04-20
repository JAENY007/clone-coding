import styled from "styled-components";

const NavBar = () =>  {
  return (
    <nav>
      <a href="">모아보기</a>
      <a href="">피드</a>
    </nav>
  );
}

export default NavBar;

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  border-bottom: 1px solid #c2c2c2;
  
`;