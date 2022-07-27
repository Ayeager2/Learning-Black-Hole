import express, { Router } from "express"  //import express
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelController.js";

import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);   //create a new hotel   

//UPDATE
router.put("/:id",verifyAdmin, updateHotel); //:id is a placeholder for the id of the hotel

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);  //:id is a placeholder for the id of the hotel  

//GET
router.get("/find/:id",getHotel); //:id is a placeholder for the id of the hotel 

//GET ALL
router.get("/", getAllHotels); //get all hotels                        
                  
router.get("/countByCity", countByCity); //get all hotels                        
router.get("/countByType", countByType); //get all hotels                        



export default router;