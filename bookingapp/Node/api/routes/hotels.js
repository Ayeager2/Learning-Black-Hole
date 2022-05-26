import express, { Router } from "express"  //import express
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";

import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);   //create a new hotel   

//UPDATE
router.put("/:id", updateHotel); //:id is a placeholder for the id of the hotel

//DELETE
router.delete("/:id", deleteHotel);  //:id is a placeholder for the id of the hotel  

//GET
router.get("/:id",getHotel); //:id is a placeholder for the id of the hotel 

//GET ALL
router.get("/", getAllHotels); //get all hotels                        


export default router;