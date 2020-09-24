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

const fetchChemicals = async () => {
  let res = await fetch(
    "https://5f16ad48a346a0001673929b.mockapi.io/api/mockdata/chemicals"
  );
  if (res.status >= 400) {
    throw new Error("Something went wrong");
  } else {
    res = await res.json();
  }
  return res;
};

export { fetchVideos, fetchChemicals };
