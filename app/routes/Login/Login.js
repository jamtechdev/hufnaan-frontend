/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'
import { userActions } from "../../_actions/user";
import { connect } from "react-redux";
import  {googleProvider,auth} from './../../_helpers'
import { useForm, Controller } from "react-hook-form";
import _ from "lodash";
import {
    Form,
    FormGroup,
    Input,
    Button,
    FormText,
    EmptyLayout,
    ThemeConsumer
} from './../../components';
import logo from '../../images/front/logo.png'
import googleicon from '../../images/front/google-icon.png';
import facebookicon from '../../images/front/facebook-icon.png';

function Login(props) {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    const onSubmit = (data) => {
        const { email, password,role } = { ...data };
        props.login(email,password,role)
    };
    const signInWithGoogle = () => {
        auth
          .signInWithPopup(googleProvider)
          .then((res) => {
            return res.user;
          })
          .catch((error) => {
            return error.message;
          });
      };
    return(
        <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <div className="login-section">
            <div className="logo-box-login">
                <img src={logo}/>
                <h3 className="login-title"> Login </h3>
            </div>
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                <Controller
                           render={({ field }) => <Input type="email" placeholder="Enter Email" {...field} />}
                            name="email"
                            control={control}
                            className="bg-gray"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email is required field.",
                                }
                            }}
                            defaultValue={""}

                        />
                        {errors.email && (
                            <FormText color={"danger"}>{errors.email.message} </FormText>
                        )}
                </FormGroup>
                <FormGroup>
                     <Controller
                            render={({ field }) => <Input type="password" placeholder="Enter Password" {...field} />}
                            name="password"
                            control={control}
                            className="bg-gray"
                            defaultValue={""}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required field.",
                                }
                            }}
                        />
                        {errors.password && (
                            <FormText color={"danger"}>{errors.password.message} </FormText>
                        )}
                </FormGroup>
                <FormGroup>
                <Controller
        name="role"
        className="bg-gray"
        control={control}
        defaultValue={"user"}
        render={({ field }) => <Input type="select" placeholder="Select Role" required
          {...field} 
        >
        <option value="student">User</option>
        <option value="tutor">Tutor</option>
        <option value="doctor">Doctor</option>
        </Input>}
      />
                    </FormGroup>
                <div className="forgot-p text-right">
                <Link to="/dashboards" className="text-decoration-none">
                    <span>Forgot Password ?</span> 
                </Link>
                </div><br/>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } className="custom-btn-theme" block >
                            Sign In
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="forgot-p text-center mb-3">                
                <Link to="/signup" className="ml-auto text-decoration-none">
                    Don't have an account ? <span>SIGNUP</span>
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
                        <Button color={ color } className="custom-btn-theme bg-blue-f" block tag={ Link } to="/">
                            <img className="google-icon-l" src={facebookicon}/> Facebook
                        </Button>
                    )
                }
                </ThemeConsumer>
                </div>
                <div className="col-md-6">
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } className="custom-btn-theme bg-default" block onClick={signInWithGoogle}>
                            <img className="google-icon-l" src={googleicon}/> Google
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
}
const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
}

const actionCreators = {
    login: userActions.login,
};
const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);
export { connectedLoginPage as LoginPage };
