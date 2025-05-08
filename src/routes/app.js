const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAbcPage,
  getTestPage,
  getCreateUser,
  getCreate,
  getEdit,
  getEditUser,
  getDelete,
  getDeleteUser,
} = require("../controller/controller");
router.get("/", getHomePage);
router.get("/abc", getAbcPage);
router.get("/test", getTestPage);
router.post("/create-user", getCreateUser);
router.get("/create", getCreate);
router.get("/edit/:id", getEdit);
router.post("/edit-user", getEditUser);
router.post("/delete/:id", getDelete);
router.post("/delete-user", getDeleteUser);
module.exports = router;
