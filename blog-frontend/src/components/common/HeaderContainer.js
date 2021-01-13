import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../lib/api/auth';

const HeaderContainer = () => {
    const { user } = useSelector(({user}) => ({user: user.user}));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;