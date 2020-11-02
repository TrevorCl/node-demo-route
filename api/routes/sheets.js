const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Get route'
    });
});

router.get('/:sheet', (req, res, next) => {
    const id = req.params.sheet
    res.status(200).json({
        message:'Get route: '+ id
    });
});

router.patch('/:sheet', (req, res, next) => {
    const id = req.params.sheet
    res.status(200).json({
        message:'Patch route: '+ id
    });
});

router.delete('/:sheet', (req, res, next) => {
    const id = req.params.sheet
    res.status(200).json({
        message:'Delete route: '+ id
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message:'Post route'
    });
});

module.exports = router;
