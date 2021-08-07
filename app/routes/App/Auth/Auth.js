/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import _ from "lodash";
import  {googleProvider,auth} from './../../../_helpers';
import { userActions } from "../../../_actions/user";
import {
    Form,
    FormGroup,
    Input,
    CustomInput,
    Button,
    FormText,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';
import logo from '../../../images/front/logo.png'

function Auth(props) {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });
    const onSubmit = (data) => {
        const { email, password } = { ...data };
        props.login(email,password)
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
                <div className="forgot-p text-right">
                <Link to="/dashboards" className="text-decoration-none">
                    Forgot<span>Password</span> 
                </Link>
                </div>
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
const connectedAuth = connect(mapStateToProps, actionCreators)(Auth);
export { connectedAuth as AuthLoginPage };
