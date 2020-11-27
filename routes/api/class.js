const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const isLoggedIn = require("../../middlewares/isLoggedIn");

router.post("/", isLoggedIn, createClass);
