import express from "express"   //import express
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAutho", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// });


// router.get("/verifyUser/:id", verifyUser, (req, res, next) => {
//     res.send("user");
// });

// router.get("/verifyAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("admin");
// });

//UPDATE
router.put("/:id",verifyUser ,updateUser); //:id is a placeholder for the id of the User

//DELETE
router.delete("/:id",verifyUser , deleteUser);  //:id is a placeholder for the id of the User  

//GET
router.get("/:id",verifyUser ,getUser); //:id is a placeholder for the id of the User 

//GET ALL
router.get("/",verifyAdmin , getAllUsers); //get all Users       

export default router;