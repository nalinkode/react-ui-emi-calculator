import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import './LayoutStyle.css'

const Layout = () => {
    return (<>
        <Container className='layoutContainer'>
            <Header><Navbar /></Header>
            <Content><Outlet /></Content>
            <Footer>Footer</Footer>
        </Container>
    </>);
}

export default Layout;