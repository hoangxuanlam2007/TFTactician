import Header from "layouts/Header";
import TopNavigation from "layouts/TopNavigation";
import Content from "layouts/Content";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { DataContext } from "contexts/DataContext";
import Footer from "layouts/Footer";

function RootLayout() {
  const [isOpenNaviagtion, setIsOpenNaviagtion] = useState(false);
  const { isLoading } = useContext(DataContext);

  return (
    <RootLayoutDefault id="root-layout">

      <Header hanleClickNavigationBtn={() => setIsOpenNaviagtion((pre) => !pre)} />
      <TopNavigation
        isOpenNaviagtion={isOpenNaviagtion}
        hanleClickLink={() => setIsOpenNaviagtion(false)}
      />
      <Content>{isLoading || <Outlet />}</Content>
      <Footer />

    </RootLayoutDefault>
  );
}

export default RootLayout;

const RootLayoutDefault = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  color: white;
  .my-content {
    background-color: #d47559;
    text-align: center;
    padding: 3px 0;
    a {
      text-decoration: none;
      color: #12407c;
    }
  }
`;
