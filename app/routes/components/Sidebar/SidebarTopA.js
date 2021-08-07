/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions/user'
import { 
    Sidebar,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';
import placeholderAvatar from '../../../images/avatars/10.jpg';

function SidebarTopA(props){
    const { authentication } = { ...props }

    function logout() {
        return () => props.logout()
    }
    return(
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0">
                <Link to="/dashboard" className="d-block">
                    <Sidebar.HideSlim>
                    <Avatar.Image
                                size="lg"
                                src={(authentication.user.profileImage !=null) ? authentication.user.profileImage :placeholderAvatar}
                                addOns={[
                                    <AvatarAddOn.Icon
                                        className="fa fa-circle"
                                        color={authentication.loggedIn ? "success" : "warning"}
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            />
                    </Sidebar.HideSlim>
                </Link>
                
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                    {authentication.user.firstName} {authentication.user.lastName}
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                    {authentication.user.email}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/" onClick={logout()}>
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        Sign Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <div className="small sidebar__link--muted">
                {authentication.user.email}
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
                    src={(authentication.user.profileImage !=null) ? authentication.user.profileImage :placeholderAvatar}
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color={authentication.loggedIn ? "success" : "warning"}
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)
}

function mapState(state) {
    const { authentication } = state
    return { authentication };
}
const actionCreators = {
    logout: userActions.logout
}
const connectedSidebarTopA = connect(mapState, actionCreators)(SidebarTopA);
export { connectedSidebarTopA as SidebarTopA };
