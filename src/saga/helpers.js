import { call, put } from "redux-saga/effects";

const fetchCall = (url, options = null) => {
  try {
    return fetch(url, options).then((res) => res.json());
  } catch (e) {
    return e.message;
  }
};

function* fetchData(url, fetchDataAction, successAction, errorAction) {
  try {
    yield put(fetchDataAction());
    const pokemonsData = yield call(fetchCall, url);
    yield put(successAction(pokemonsData));
  } catch (error) {
    yield put(errorAction(error));
  }
}

export default fetchData;
