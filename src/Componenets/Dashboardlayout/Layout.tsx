import React from 'react'
import Dashboardhead from '../Static/Dashboardhead';
import Sidebar from '../Static/Sidebar';
import {Outlet} from'react-router-dom'
import styled from 'styled-components';
const Layout = () => {
  return (
    <div>
         <Dashboardhead />
      <Holder>
      <Sidebar/>
         <Outlet/>
      </Holder>
        
    
    </div>
  )
}

export default Layout;
const Holder=styled.div`
  display: flex;
  height: calc(100vh - 60px);
  /* background-color: #ed380b; */
`