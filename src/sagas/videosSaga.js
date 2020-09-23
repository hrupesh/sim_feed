import { takeEvery, call, put } from "redux-saga/effects";
const { VIDEOS } = require("../constants");
import { fetchVideos } from "../api";
import { setVideos, setError } from "../actions";

function* handleVideosLoad() {
  try {
    // console.log("Loading......");
    const videos = yield call(fetchVideos);
    yield put(setVideos(videos));
  } catch (e) {
    yield put(setError(e));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(VIDEOS.LOAD, handleVideosLoad);
}
