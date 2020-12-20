import React from "react";
import { Route } from "react-router-dom";
import { LoginPage, PostListPage, PostPage, RegisterPage, WritePage } from "./pages";

function App() {
    return (
        <>
            <Route component={PostListPage} path={["/@:username", "/"]} exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={WritePage} path="/write" />
            <Route component={PostPage} path="/@:username/:postId" />
        </>
    );
}

export default App;
