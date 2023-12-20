const express = require('express');
const router = express.Router();
const { getTagByType } = require("../../services/public/tagList");
const { z } = require('zod');
const catchAsync = require("../../utils/catch-async.util");

const getAllPackages = catchAsync(async (req,res) => {
    const id = Number(req.params.id);
    const schema = z.number();
    const result = schema.safeParse(id);
    if(!result.success){
        res.send(result.error);
        return;
    }
      const tagList = await getTagByType(id);
      res.send(tagList);
})

module.exports = {
  getAllPackages
};