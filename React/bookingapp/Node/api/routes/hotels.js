import express, { Router } from "express"   //import express
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch (e) {
        res.status(500).json(e);
    }
})
//UPDATE
router.put("/:ID", async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.ID, {$set: req.body}, {new:true});
        res.status(200).json(updatedHotel);
    }
    catch (e) {
        res.status(500).json(e);
    }
})
//DELETE
//GET
//GETALL



export default router;