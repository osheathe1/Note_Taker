const router = require("express").Router();
const path = require('path');
const fs = require('fs');

router.get('/notes', (req, res) => {
const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf8"));
res.json(savednotes);
});

router.post('/notes', (req, res) => {
    const savednotes = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf8"));
    console.log(req.body)
    savednotes.push(req.body)
    fs.writeFileSync(path.join(__dirname,"../db/db.json"), JSON.stringify(savednotes));
    res.json(savednotes);

    });

    router.delete('/notes', (req, res) => {
        deleteNote(notes, req.params);
        res.json(notes);
    })

module.exports = router