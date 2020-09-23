import { VIDEOS } from "../constants";

const loadVideos = () => ({
  type: VIDEOS.LOAD,
});

const setVideos = (VIDEOS) => ({
  type: VIDEOS.LOAD_SUCCESS,
  VIDEOS,
});

const setError = (error) => ({
  type: VIDEOS.LOAD_FAIL,
  error,
});

export { loadVideos, setVideos, setError };
