const express = require("express");
const {
  getUserApi,
  getInfoApi,
  getReleaseChartApi,
  getSongInfoApi,
  getSongApi,
  getListSongArtistApi,
  getDetailPlayListApi,
  getChartHomeApi,
  getNewReleaseChartApi,
  getSearchSongApi,
  getArtistApi,
  getLyricApi,
} = require("../controller/apiController");
const router = express.Router();
router.get("/user", getUserApi);
router.get("/home", getInfoApi);
router.get("/newReleaseChart", getReleaseChartApi);
router.get("/songInfo", getSongInfoApi);
router.get("/song", getSongApi);
router.get("/listSongArtist", getListSongArtistApi);
router.get("/detailPlayList", getDetailPlayListApi);
router.get("/chartHome", getChartHomeApi);
router.get("/newReleaseChart", getNewReleaseChartApi);
router.get("/searchSong", getSearchSongApi);
router.get("/artist", getArtistApi);
router.get("/lyric", getLyricApi);

module.exports = router;
