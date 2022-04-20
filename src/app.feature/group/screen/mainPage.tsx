import { getThemeProps } from "@mui/system";
import styled from "styled-components";
import NavBar from "../component/navbar";
import SearchBar from "../component/searchBar";


const MainPage = (props: any) => (
    <PageBox>
      <NavBar />
      {props.children}
    </PageBox>
);

export default MainPage;

const PageBox = styled.div`
  background: white;
  padding: 10px;
`;