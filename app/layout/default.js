/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {
    Layout,
    ThemeProvider,
} from './../components';

import './../styles/bootstrap.scss';
import './../styles/main.scss';
import './../styles/plugins/plugins.scss';
import './../styles/plugins/plugins.css';
import './../styles/plugins/ReactToastify.css';
import {
    RoutedNavbars,
    RoutedSidebars,
} from './../routes';

const favIcons = [
    { rel: 'icon', type: 'image/x-icon', href: require('./../images/favicons/favicon.ico') },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./../images/favicons/favicon-16x16.png') }
];

function AppLayout(props){
    console.log("AppLayout",props)
    const {children, authentication} = props;
        return (
            <ThemeProvider initialStyle="light" initialColor="success">
                <Layout sidebarSlim favIcons={ favIcons }>
                    { /* --------- Navbar ----------- */ }
                    <Layout.Navbar>
                    <RoutedNavbars loggedIn={authentication} />
                    </Layout.Navbar>
                    { /* -------- Sidebar ------------*/ }
                    <Layout.Sidebar>
                    <RoutedSidebars loggedIn={authentication}/>
                    </Layout.Sidebar>
                    { /* -------- Content ------------*/ }
                    <Layout.Content>
                        { children }
                    </Layout.Content>
                </Layout>
            </ThemeProvider>
        );
    
}

function mapState(state) {
    const {authentication} = state;
    return {authentication};
}

const AppLayoutComponent = withRouter(connect(mapState)(AppLayout));
export default AppLayoutComponent
