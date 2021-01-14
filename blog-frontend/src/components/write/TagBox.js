import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBox = () => {
    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm>
                <input placeholder="태그를 입력하세요" />
                <button type="추가">추가</button>
            </TagForm>
            <TagList tags={['태그1','태그2','태그3']} />
        </TagBoxBlock>
    );
};

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4 {
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid ${palette.gray[9]};
    
    input, 
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
        min-wdith: 0;
    }
`;

export default TagBox;