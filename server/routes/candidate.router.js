const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET candidates
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM candidates`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST candidates
router.post('/', (req, res) => {
    console.log(req.body)
    const newCandidate = req.body.github_name;
    const sqlText = `INSERT INTO candidates (github_name) VALUES ($1)`;
    pool.query(sqlText, [newCandidate])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.delete('/:github_name', (req, res) => {
    const newCandidate = req.params.github_name;
    console.log(newCandidate)
    const sqlText = `DELETE FROM candidates WHERE "github_name" = $1;`;
    pool.query(sqlText, [newCandidate])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {``
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;