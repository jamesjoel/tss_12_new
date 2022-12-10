const routes = require("express").Router();

routes.use("/api/teacher", require("../controllers/TeacherController"));

module.exports = routes;