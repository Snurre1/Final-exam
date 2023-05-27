import * as B from "./index.styled"
import {  Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

function Layout() {
    return (
      <div>
        <Header />

     <B.BodyWrapper>  <Outlet />
        <Footer /></B.BodyWrapper> 
      </div>
    );
  }
export default Layout  