import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,   
    EmptyLayout,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../components/Pages/HeaderAuth";
import { FooterAuth } from "../components/Pages/FooterAuth";

const Error404 = () => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Page Not Found" text={"The page you are looking for might have been removed or is temporarily unavaliable."}
            />
     
            { /* END Header */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
            <ThemeConsumer>
                {
                    ({ color }) => (
                        <Link to="/login">
                        <Button color={color} block>
                        Back to Login
                        </Button>
                        
                    </Link>
                    )
                }
                </ThemeConsumer>
               
                {/* <Link to="/" className="ml-auto text-decoration-none">
                    Support
                </Link> */}
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Error404;
