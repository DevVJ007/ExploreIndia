const express = require('express');
const router = express.Router();
const { getTagByType } = require("../../services/public/tagList");
const { z } = require('zod');
router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const schema = z.number();
    const result = schema.safeParse(id);
    if(!result.success){
        res.send(result.error);
        return;
    }
    getTagByType(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
})

module.exports = router;