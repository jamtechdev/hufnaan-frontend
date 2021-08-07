/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/user'
import _ from 'lodash'
import {
    NavItem,
    NavLink
} from './../../components';

function NavbarUser(props){

    function logout() {
        return () => props.logout()
    }
    let p =_.omit(props,"logout")
    return(
    <NavItem {...p}>
        <NavLink tag={ Link } to="/" onClick={logout()}>
            <i className="fa fa-power-off"></i>
        </NavLink>
    </NavItem>
)
}
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.string,
    logout:PropTypes.func
};

const actionCreators = {
    logout: userActions.logout
}
const connectedNavbarUser = connect(null, actionCreators)(NavbarUser);
export { connectedNavbarUser as NavbarUser };
