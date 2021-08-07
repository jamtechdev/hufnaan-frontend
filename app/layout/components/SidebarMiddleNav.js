/* eslint-disable react/prop-types */
import React from "react";

import { SidebarMenu } from "./../../components";
import { connect } from "react-redux";
function SidebarMiddleNav(props) {
    const { navigation } = props;
    const menu = navigation.pages.map((menu, index) => 
  <SidebarMenu.Item
        key={index}
        title={menu.title}
        {...menu.main ? {to: menu.link} : {}}
        icon={<i className={menu.icon}></i>}
  >{menu.subMenu && menu.subMenu.map((smenu,i)=><SidebarMenu.Item to={smenu.link} key={i} title={smenu.title}/>)}</SidebarMenu.Item>);

  return <SidebarMenu>{menu}</SidebarMenu>;
}
function mapState(state) {
  const { navigation } = { ...state };
  return { navigation };
}
const connectedSidebarMiddleNav = connect(mapState, null)(SidebarMiddleNav);
export { connectedSidebarMiddleNav as SidebarMiddleNav };
