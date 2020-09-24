import { takeEvery, call, put } from "redux-saga/effects";
const { CHEMICALS } = require("../constants");
import { fetchChemicals } from "../api";
import { setChemicals, setChemicalError } from "../actions";

function* handleChemicalsLoad() {
  try {
    const chemicals = yield call(fetchChemicals);
    yield put(setChemicals(chemicals));
  } catch (e) {
    yield put(setChemicalError(e));
  }
}

export default function* watchChemicalsLoad() {
  yield takeEvery(CHEMICALS.LOAD, handleChemicalsLoad);
}
