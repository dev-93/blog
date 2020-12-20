import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

// 회원가입/ 로그인 페이지의 레이아웃
const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">박제령의 쇼핑몰</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
    display: flex;
    justify-content: center;
    flex-direction: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    box-shadow: 0 0 8px rgba(0,0,0,0.25);
    padding: 2rem;
    width: 360px;
    background: #fff;
    border-radius: 2px;
    
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
`;

export default AuthTemplate;