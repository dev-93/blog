import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import user, { check } from "../../modules/user";
import {withRouter} from 'react-router-dom';

const RegisterForm = ({history}) => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };


    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm} = form;
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(register({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form 초기화
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log("오류 발생");
            console.log(authError);
            return;
        } 
        if (auth) {
            console.log("회원가입 성공");
            console.log(authError);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <AuthForm 
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);
