import React from 'react';
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom';
import AppLayoutComponent from './../../layout/default';
import { RoutedContent } from './../../routes';
import {history} from '../../_helpers';
import { ToastContainer } from 'react-toastify';
// const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
    return (
       
        <Router history={history}>
            <AppLayoutComponent>
                <RoutedContent />
                <ToastContainer position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                closeOnClick={true}
                                pauseOnHover={true}
                                draggable={false}
                                progress={undefined}
                                pre/> 
            </AppLayoutComponent>
        </Router>
     
    );
}

export default hot(module)(AppClient);