import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login, register } from "../../../store/slices/authSlice/api";

import {
    getAuthData,
    getAuthError,
    getAuthSuccess,
} from "../../../store/slices/authSlice/authSlice";
import {
    loginInitialValues,
    registerInitialValues,
} from "../../../forms/initialValues";
import {
    loginValidationSchema,
    registerValidationSchema,
} from "../../../forms/validationSchemas";

import ROUTES from "../../../ROUTES";
import styles from "./index.module.scss";
import useNotification from "../../../hooks/useNotification";

const AuthContent = ({ isRegister }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notification = useNotification();
    const authData = useSelector(getAuthData);
    const authError = useSelector(getAuthError);
    const authSuccess = useSelector(getAuthSuccess);
    useEffect(() => {
        if (authError) {
            notification(authError, "error");
            return;
        }

        if (authSuccess) {
            notification(
                `You are successful ${isRegister ? "registered" : "logged in"}!`,
            );

            setTimeout(() => {
                navigate(isRegister ? ROUTES.LOGIN : ROUTES.HOME);
            }, 2500);
        }
    }, [authSuccess, authError]);
    return (
        <div className={styles.auth__container}>
            <div className={styles.auth}>
                <h2 className={styles.title}>
                    {isRegister ? "Register" : "Login"}
                </h2>
                <Formik
                    initialValues={
                        isRegister ? registerInitialValues : loginInitialValues
                    }
                    validationSchema={
                        isRegister
                            ? registerValidationSchema
                            : loginValidationSchema
                    }
                    onSubmit={(values) =>
                        dispatch(isRegister ? register(values) : login(values))
                    }
                    key={isRegister ? "register" : "login"}
                >
                    <Form className={styles.auth__form}>
                        {isRegister && (
                            <div className={styles.row}>
                                <label>
                                    First Name:
                                    <Field type="text" name="firstName" />
                                    <ErrorMessage
                                        className={styles.error}
                                        name="firstName"
                                        component={"p"}
                                    />
                                </label>

                                <label>
                                    Last Name:
                                    <Field type="text" name="lastName" />
                                    <ErrorMessage
                                        className={styles.error}
                                        name="lastName"
                                        component={"p"}
                                    />
                                </label>
                            </div>
                        )}
                        <label>
                            Email:
                            <Field type="email" name="email" />
                            <ErrorMessage
                                className={styles.error}
                                name="email"
                                component={"p"}
                            />
                        </label>
                        <label>
                            Password:
                            <Field type="password" name="password" />
                            <ErrorMessage
                                className={styles.error}
                                name="password"
                                component={"p"}
                            />
                        </label>
                        {isRegister && (
                            <>
                                <label>
                                    Confirm Password:
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                    />
                                    <ErrorMessage
                                        className={styles.error}
                                        name="confirmPassword"
                                        component={"p"}
                                    />
                                </label>
                                <label>
                                    Role:
                                    <Field as="select" name="role">
                                        <option value="student">Student</option>
                                        <option value="mentor">Mentor</option>
                                    </Field>
                                    <ErrorMessage
                                        className={styles.error}
                                        name="role"
                                        component={"p"}
                                    />
                                </label>
                            </>
                        )}
                        <button type="submit" className={styles.btn}>
                            {isRegister ? "Register" : "Login"}
                        </button>
                    </Form>
                </Formik>

                <div className={styles.auth__bottom}>
                    Are you {!isRegister ? "not " : ""}registered?
                    <Link to={isRegister ? ROUTES.LOGIN : ROUTES.REGISTER}>
                        {isRegister ? "Login" : "Register"}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default AuthContent;
