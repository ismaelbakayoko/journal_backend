const express = require('express')

router = express.Router()

router.get("/", (req, res) => {
    res.send("get message")
})

module.exports = router