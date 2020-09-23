import { VIDEOS } from "../constants";

const loadVideos = () => ({
  type: VIDEOS.LOAD,
});

const setVideos = (videos) => ({
  type: VIDEOS.LOAD_SUCCESS,
  videos,
});

const setError = (error) => ({
  type: VIDEOS.LOAD_FAIL,
  error,
});

export { loadVideos, setVideos, setError };
