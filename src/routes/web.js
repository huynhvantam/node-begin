const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

module.exports = router