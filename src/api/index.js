const fetchVideos = async () => {
  let res = await fetch("https://private-c31a5-task27.apiary-mock.com/videos");
  if (res.status >= 400) {
    throw new Error("Something went wrong");
  } else {
    res = await res.json();
    res = await res.videos;
  }
  return res;
};

export { fetchVideos };
