import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Input,
    CustomInput,
    Button,
    EmptyLayout,
    ThemeConsumer,

} from './../../components';

import IntlTelInput from "react-intl-tel-input";
import "../../styles/override/flag-input.css";
import logo from '../../images/front/logo.png';
import googleicon from '../../images/front/google-icon.png';
import facebookicon from '../../images/front/facebook-icon.png';
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]
const Signup = () => (
    <EmptyLayout>
        <EmptyLayout.Section center width={480}>
            { /* START Header */}
            <div className="login-section">


                <div className="logo-box-login">
                    <img src={logo} />
                    <h3 className="login-title"> SIGNUP </h3>
                </div>
                { /* END Header */}
                { /* START Form */}
                <Form className="mb-3">
                    <FormGroup>

                        <Input type="text" name="text" id="fullName" placeholder="Full Name" className="bg-gray" />

                    </FormGroup>

                    <FormGroup>

                        <Input type="email" name="email" id="emailAdress" placeholder="Email" className="bg-gray" />

                    </FormGroup>


                    <FormGroup>

                        <IntlTelInput
                            containerClassName="intl-tel-input"
                            inputClassName="form-control"
                            separateDialCode

                            style={{ width: "100%" }}
                        />
                    </FormGroup>
                    <FormGroup>

                        <Input type="password" name="password" id="password" placeholder="Password..." className="bg-gray" />
                    </FormGroup>
                    <FormGroup>
                        <select className="bg-gray form-control">
                            <option>Select Role</option>
                            <option>Student</option>
                            <option>Tutor</option>
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <CustomInput type="checkbox" id="acceptTerms" label="Accept Terms and Privacy Policy" inline />
                    </FormGroup>
                    <ThemeConsumer>
                        {
                            ({ color }) => (
                                <Button color={color} className="custom-btn-theme" block tag={Link} to="/">
                                    Sign Up
                                </Button>
                            )
                        }
                    </ThemeConsumer>
                </Form>
                { /* END Form */}
                { /* START Bottom Links */}
                <div className="forgot-p text-center mb-3">

                    <Link to="/login" className="ml-auto text-decoration-none">
                        Already a member? <span>LOGIN</span>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="or-login mb-3"><span>OR</span></p>
                    </div>
                    <div className="col-md-6">
                        <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={color} className="custom-btn-theme bg-blue-f" block tag={Link} to="/">
                                        <img className="google-icon-l" src={facebookicon} /> Facebook
                                    </Button>
                                )
                            }
                        </ThemeConsumer>
                    </div>
                    <div className="col-md-6">
                        <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={color} className="custom-btn-theme bg-default" block tag={Link} to="/">
                                        <img className="google-icon-l" src={googleicon} /> Google
                                    </Button>
                                )
                            }
                        </ThemeConsumer>
                    </div>
                </div>
                { /* END Bottom Links */}
                { /* START Footer */}

                { /* END Footer */}
            </div>
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Signup;
