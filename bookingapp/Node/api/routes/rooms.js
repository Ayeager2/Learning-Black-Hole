import express, { Router } from "express"  //import express
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelId",verifyAdmin, createRoom);   //create a new Room   

//UPDATE
router.put("/:id",verifyAdmin, updateRoom); //:id is a placeholder for the id of the Room

//DELETE
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);  //:id is a placeholder for the id of the Room  

//GET
router.get("/:id",getRoom); //:id is a placeholder for the id of the Room 

//GET ALL
router.get("/", getAllRooms); //get all Rooms                        



export default router;