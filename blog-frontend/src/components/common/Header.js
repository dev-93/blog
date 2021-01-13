import React from 'react';
import styled from "styled-components";
import Responsive from './Responsive';


const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">REACTERS</div>
                    <div className="right">
                        <button>로그인</button>
                    </div>
                </Wrapper>
            </HeaderBlock>

            <Spacer/>
        </>
    )
};

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

export default Header;