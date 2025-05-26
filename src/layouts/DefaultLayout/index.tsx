import React, { useState } from "react";
import { StyledDefaultLayout } from "./style";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "components/Sitebar";
import Navbar from "components/Navbar";

const { Header, Content } = Layout;

const DefaultLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleChangeCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledDefaultLayout>
      <Layout className="layout">
        <Sidebar
          isCollapsed={isCollapsed}
          handleChangeCollapse={handleChangeCollapse}
        />
        <Layout>
          <Header className="header">
            <Navbar isCollapsed={isCollapsed} />
          </Header>
          <Content
            className={`content container ${isCollapsed ? "collapsed" : ""}`}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;