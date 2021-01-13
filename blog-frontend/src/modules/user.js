import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { call, takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

const TEMP_SET_USER = "user/TEMP_SET_USER";

const [ CHECK, CHECK_SUCCESS, CHECK_FAILURE ] = createRequestActionTypes(
    "user/CHECK",
);

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// 사가 생성
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga () {
    try {
        localStorage.removeItem('user');
    } catch (e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga () {
    try {
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, checkFailureSaga);
}

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
    },
    initialState,
);