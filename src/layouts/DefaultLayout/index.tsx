import React, { useState } from 'react';
import { StyledDefaultLayout } from './style';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const DefaultLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const handleChangeCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <StyledDefaultLayout>
      <Layout className="layout">
        <Content className={`${isCollapsed ? 'collapsed' : ''} content container`}>
          <>
            <Outlet />
          </>
        </Content>
      </Layout>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
