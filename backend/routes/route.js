const express = require('express');
const router = express.Router();

const todoData=require("../model/schema")

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/addtodo", async (req, res) => {
    try {
      console.log(req.body);
      const item = req.body;
      const newdata = new todoData(item);
      await newdata.save();
      res.status(200).json({ message: "POST Successful" });
    } catch (error) {
      console.error(`Error adding todo: ${error.message}`);
      res.status(400).json({ error: "Error adding todo", message: error.message });
    }
  });

router.get("/fetchdata",async (req,res)=>{
    try {
        let data = await todoData.find({});
        res.set('Cache-Control', 'no-store');
        console.log(data)
        res.json({data:data,status:200}).status(201);
    } catch (error) {
         res.status(400).json({ message: "GET request CANNOT be completed" });       
    }
    
})

module.exports = router;