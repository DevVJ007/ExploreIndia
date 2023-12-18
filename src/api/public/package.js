const express = require('express');
const router = express.Router();
const {getPackage} = require('../../services/public/package');
router.get('/', async(req,res)=> {
    try {
        const data = await getPackage();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})
module.exports = router;