import React from "react";
import Responsive from "../components/common/Responsive";
import TagBox from "../components/write/TagBox";
import WriteActionButton from "../components/write/WriteActionButton";
import EditorContainer from "../containers/write/EditorContainer";

const WrtiePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBox />
            <WriteActionButton />
        </Responsive>);
};

export default WrtiePage;
