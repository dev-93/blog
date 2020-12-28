import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import user, { check } from "../../modules/user";
import {withRouter} from 'react-router-dom';

const RegisterForm = ({history}) => {
    const [error, setError] = useState(null);
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
        if([username, password, passwordConfirm].includes('')) {
            setError('빈칸을 모두 입력하세요.');
            return;
        }
        if(password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다');
            dispatch(changeField({form: 'register', key: 'password', value: ''}));
            dispatch(changeField({form: 'register', key: 'passwordConfirm', value: ''}));
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
            if(authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다');
                return;
            }
            setError('회원가입 실패');
            return;
        }
      
        if (auth) {
            console.log("회원가입 성공");
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            console.log('회원가입 성공');
            console.log(user);
            history.push('/');
        }
    }, [history, user]);

    return (
        <AuthForm 
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(RegisterForm);
