const express = require("express");
const router = express.Router();

router.get('*', (req, res) => {
    res.status(404).render('404.ejs');
});

//kui tahan seda 404.js kasutada, pean teda eksportima

module.exports = router;