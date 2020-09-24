import { VIDEOS } from "../constants";
import { CHEMICALS } from "../constants";

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

const loadChemicals = () => ({
  type: CHEMICALS.LOAD,
});

const setChemicals = (chemicals) => ({
  type: CHEMICALS.LOAD_SUCCESS,
  chemicals,
});

const setChemicalError = (error) => ({
  type: CHEMICALS.LOAD_FAIL,
  error,
});

export {
  loadVideos,
  setVideos,
  setError,
  loadChemicals,
  setChemicals,
  setChemicalError,
};
