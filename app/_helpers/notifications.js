/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import { history } from './history'
import { store } from "../_store/store";
import { userConstants } from '../_constants'
import _ from "lodash";
export const clearApiInfoMessages = (info)=>{
    if (typeof info === 'string') {
        return toast.info(info);
    }
}
export const clearApiErrorMessages = (error) => {
    if (typeof error === 'string') {
        return toast.error(error);
    }
    if (error.response) {
        if (error.response.status === 401) {
            toast.error("Your access token is expired for Adverto CX.")
            history.push('/')
            store.dispatch({ type: userConstants.LOGOUT })
            // noinspection SpellCheckingInspection
            localStorage.removeItem('pyrevsysreftock');
            return true
        }
        if (Array.isArray(error.response.data)) {
            let field_errors = Object.values(error.response.data);
            field_errors.forEach((e) => {
                toast.error(e.toString());
            });
        }
        // else {
        //     toast.error("Having some trouble with server please try again after some time.")
        // }

    }
};
export const clearApiSuccessMessages = (message) => {
    return toast.success(message.toString());
};

