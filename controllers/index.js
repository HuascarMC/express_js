const express = require('express');
const router = new express.Router();

const filmRouter = require('./films.js')
router.use('/films', filmRouter);

module.exports = router;
