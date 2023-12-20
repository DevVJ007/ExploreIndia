const express = require('express');
const router = express.Router();
const {public} = require('../../services');
const catchAsync = require("../../utils/catch-async.util");


const getById = catchAsync( async(req,res,next) => {
        const data = await public.getPackage();
        res.status(200).json(data);
});

module.exports = {
    getById
};