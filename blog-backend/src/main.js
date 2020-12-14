/* eslint-disable no-undef */
require("dotenv").config();
import Koa from "Koa";
import Router from "koa-router";
import bodyParser from "koa-bodyParser";
import mongoose from "mongoose";

import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";

// process.env 내부 값에 대한 레퍼런스 생성
const { PORT, MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log("Succed Connecting MongDB");
    })
    .catch((e) => {
        console.log(e);
    });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes()); //라우터 적용

// 라우터 적용 전, bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app instance에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log("Listening to Port %d", port);
});
