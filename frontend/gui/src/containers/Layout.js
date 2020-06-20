import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/">Register</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/">Add Restaurant</Link></Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: '0 80px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                    <div className="site-layout-content" style={{background: '#fff', padding: '30px'}}>
                        {props.children}
                    </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}> ©2020 - Designed & Created by Uc Wealth</Footer>
            </Layout>
    );
}

export default CustomLayout;