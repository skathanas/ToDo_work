const express = require("express");
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about.ejs');
});

//kui tahan seda 404.js kasutada, pean teda eksportima

module.exports = router;