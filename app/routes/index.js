import React from 'react';

import {
    Route,
    Switch,
    // Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
const Home = React.lazy(() => import('./FrontPages/Home'))
const Login = React.lazy(() => import('./Login'))
const Signup = React.lazy(() => import('./Signup'))
// import ProjectsDashboard from './Dashboards/Projects'
import SidebarWithNavbar from './Layouts/SidebarWithNavbar'
const Loader = () => {
    return (
        <div className="loader-bg">
            <div className="loader-track">
                <div className="loader-fill"/>
            </div>
        </div>
    );
};
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <React.Suspense fallback={<Loader/>}>
        <Switch>
        <Route from="/" component={Home} exact />
            <Route from="/login" component={Login} exact />
            <Route from="/signup" component={Signup} exact />
            {/* <Route path="/dashboards/projects" exact component={ProjectsDashboard} /> */}

            { /*    404    */ }
            {/* <Redirect to="/pages/error-404" /> */}
        </Switch>
        </React.Suspense>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Default Navbar: */}
        <Route
            component={ SidebarWithNavbar.Navbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Default Sidebar: */}
        <Route
            component={ SidebarWithNavbar.Sidebar }
        />
    </Switch>
);
