/* eslint-disable react/prop-types */
import React from 'react';

import {
    Route,
    Switch,
    // Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Home from './FrontPages/Home';
import LoginPage from './Login';
import Signup from './Signup';
import Error404 from './Error404';
import ProjectsDashboard from './Dashboards/Projects';
 import SidebarWithNavbar from './Layouts/SidebarWithNavbar' 
 import { PrivateRoute } from '../_component/PrivateRoute';
 /**
  * =====================================================
  * STUDENT ROUTES IMPORT START
  * =====================================================
  */
 import Tutors from './App/Student/Tutors'
 import Courses from './App/Student/Courses'
 import AccountDetails from './App/Student/AccountDetails'
 import MyCourses from './App/Student/MyCourses'
//  import MyDocuments from './App/Student/MyDocuments'
 import PersonalDetails from './App/Student/PersonalDetails'
 /**
  * =====================================================
  * STUDENT ROUTES IMPORT END
  * =====================================================
  */
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
        <Route from="/" component={Home} exact />
            <Route from="/login" component={LoginPage} exact />
            <Route from="/signup" component={Signup} exact />
            <PrivateRoute exact path="/dashboard" component={ProjectsDashboard} />
            { /*    STUDENT ROUTE START    */ }
            <PrivateRoute exact path="/student/courses" component={Courses} />
            <PrivateRoute exact path="/student/tutors" component={Tutors} />
            <PrivateRoute exact path="/student/account-details" component={AccountDetails} />
            <PrivateRoute exact path="/student/my-courses" component={MyCourses} />
            {/* <PrivateRoute exact path="/student/my-documents" component={MyDocuments} /> */}
            <PrivateRoute exact path="/student/personal-details" component={PersonalDetails} />
            { /*    STUDENT ROUTE END    */ }
            { /*    404    */ }
            <Route  path="*" component={Error404}/>
        </Switch>
    );
};

//------ Custom Layout Parts --------
export function RoutedNavbars(props){
    const { loggedIn } = props
    console.log("RoutedNavBar",loggedIn)
    return(
    <Switch>
        { /* Default Navbar: */}
        {loggedIn.loggedIn &&
        <Route
            component={ SidebarWithNavbar.Navbar }
        />}
    </Switch> 
    );
   
}

export function RoutedSidebars(props){
    const { loggedIn } = props
    console.log("RoutedSideBar",loggedIn)
    return(
    <Switch>
        { /* Default Sidebar: */}
        {loggedIn.loggedIn &&
        <Route
            component={ SidebarWithNavbar.Sidebar }
        />}
    </Switch>
 
);
    }
