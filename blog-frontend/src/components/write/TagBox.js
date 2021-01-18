import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagItem = React.memo(({tag})=> <Tag>#{tag}</Tag>);

const TagList = React.memo(({tags})=> (
    <TagListBlock>
        {tags.map((tag) => (
            <TagItem ket={tag} tag={tag} />
        ))}
    </TagListBlock>
));

const TagBox = () => {
    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm>
                <input placeholder="태그를 입력하세요" />
                <button type="submit">추가</button>
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
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding:0 1rem;
        border:none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover {
        opacity: .5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
    
`;

export default TagBox;