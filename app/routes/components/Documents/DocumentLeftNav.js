import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Nav,
    NavItem,
    NavLink
} from '../../../components';

const DocumentLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
        <Nav pills  className="nav-justified mb-3">
            <NavItem className="mr-2">
                <NavLink tag={ RouterNavLink } to="/" active>
                    Library
                </NavLink>
            </NavItem>
            <NavItem className="mr-2">
                <NavLink  tag={ RouterNavLink } to="/">
                    Upload Documents
                </NavLink>
            </NavItem>
            <NavItem className="mr-2">
                <NavLink  tag={ RouterNavLink } to="/">
                    App Documents
                </NavLink>
            </NavItem>
            <NavItem className="mr-2">
                <NavLink  tag={ RouterNavLink } to="/">
                    Documents Shared
                </NavLink>
            </NavItem>
        </Nav>
                        
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export {DocumentLeftNav} ;
