const User = require("../models/user");
const { ZingMp3 } = require("zingmp3-api-full-v3");
const getUserApi = async (req, res) => {
  let users = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: users,
  });
};
const getInfoApi = async (req, res) => {
  const data = await ZingMp3.getHome();
  return res.status(200).json({
    data,
  });
};
const getReleaseChartApi = async (req, res) => {
  const data = await ZingMp3.getNewReleaseChart();
  return res.status(200).json({
    data,
  });
};
const getSongInfoApi = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing id",
    });
  }
  const data = await ZingMp3.getInfoSong(id);
  return res.status(200).json({
    data,
  });
};
const getSongApi = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing id",
    });
  }
  const data = await ZingMp3.getSong(id);
  return res.status(200).json({
    data,
  });
};
const getListSongArtistApi = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing id",
    });
  }
  const data = await ZingMp3.getListArtistSong(id, "1", "15");
  return res.status(200).json({
    data,
  });
};
const getDetailPlayListApi = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing id",
    });
  }
  const data = await ZingMp3.getDetailPlaylist(id);
  return res.status(200).json({
    data,
  });
};
const getChartHomeApi = async (req, res) => {
  const data = await ZingMp3.getChartHome();
  return res.status(200).json({
    data,
  });
};
const getNewReleaseChartApi = async (req, res) => {
  const data = await ZingMp3.getNewReleaseChart();
  return res.status(200).json({
    data,
  });
};
const getSearchSongApi = async (req, res) => {
  const { key } = req.query;
  if (!key) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing key",
    });
  }
  const data = await ZingMp3.search(key);
  return res.status(200).json({
    data,
  });
};
const getArtistApi = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing key",
    });
  }
  const data = await ZingMp3.getArtist(name);
  return res.status(200).json({
    data,
  });
};
const getLyricApi = async (req, res) => {
  const { idSong } = req.query;
  if (!idSong) {
    return res.status(400).json({
      errorCode: 1,
      message: "Missing key",
    });
  }
  const data = await ZingMp3.getLyric(idSong);
  return res.status(200).json({
    data,
  });
};
module.exports = {
  getUserApi,
  getInfoApi,
  getReleaseChartApi,
  getSongInfoApi,
  getSongApi,
  getListSongArtistApi,
  getDetailPlayListApi,
  getNewReleaseChartApi,
  getChartHomeApi,
  getSearchSongApi,
  getArtistApi,
  getLyricApi,
};
