const express = require('express');
const router = express.Router();
const { getTagByType } = require("../../services/public/tagList");
const { z } = require('zod');
router.get("/:id",async (req,res)=>{
    const id = Number(req.params.id);
    const schema = z.number();
    const result = schema.safeParse(id);
    if(!result.success){
        res.send(result.error);
        return;
    }
    try {
      const tagList = await getTagByType(id);
      res.send(tagList);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
})

module.exports = router;