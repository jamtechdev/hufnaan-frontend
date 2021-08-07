/* eslint-disable no-unused-vars */
import {userConstants,navigationConstants} from '../../_constants'
import {userService} from '../../_services/user.service'
import {persistor,store} from "../../_store/store";
import {history,clearApiErrorMessages,clearApiSuccessMessages,clearApiInfoMessages,MESSAGES} from '../../_helpers';
const userActions = {
    login,
    logout
};

function login(username, password,role){
    return (dispatch) => {
        userService.login(username, password,role).then(
            (user) => {
                if(!user.data || (!user.status)){
                    store.dispatch({ type: userConstants.LOGOUT })
                    clearApiErrorMessages(user.message)
                    return
                }
                if (user.data.user.role === "teacher" && (!user.data.user.approved)){
                    store.dispatch({ type: userConstants.LOGOUT })
                    clearApiInfoMessages(MESSAGES.ACCOUNT_UNAPPROVED_MESSAGE)
                    return
                }
                    let navigationData = {role:user.data.user.role}
                    dispatch({ type: navigationConstants.FEED_DASHBOARD_NAVIGATIONS,navigationData})
                    dispatch(success(user.data));
                    if (persistor.flush()) {
                        history.push({pathname: "dashboard"});
                    } 
                
                    
            },
            (error) => {
                clearApiErrorMessages(error.toString());
            }
        );
    };
    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user};
    }
}
function logout(){
    return (dispatch) => {
        userService.logout();
        dispatch(success());
    };

    function success() {
        return {type: userConstants.LOGOUT};
    }
}
export {userActions}