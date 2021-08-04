import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-user"></i>}
            title="Profile"
        >
            <SidebarMenu.Item title="Personal Details" to='/cards/cards' exact />
            <SidebarMenu.Item title="Account Details" to='/cards/cardsheaders' exact />
            <SidebarMenu.Item title="My Courses" to='/cards/cardsheaders' exact />
            <SidebarMenu.Item title="My Documents" to='/cards/cardsheaders' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-book"></i>}
            title="Courses"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-mortar-board"></i>}
            title="Tutor"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-stethoscope"></i>}
            title="Doctor"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-comments"></i>}
            title="Chat"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-calendar"></i>}
            title="My Bookings"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-headphones"></i>}
            title="Support Center"
            to='/widgets'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title="About Us"
            to='/widgets'
        />
    </SidebarMenu >
);
