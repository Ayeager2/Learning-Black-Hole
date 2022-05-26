import express from "express"   //import express
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkAutho", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
});

//UPDATE
router.put("/:id", updateUser); //:id is a placeholder for the id of the User

//DELETE
router.delete("/:id", deleteUser);  //:id is a placeholder for the id of the User  

//GET
router.get("/:id",getUser); //:id is a placeholder for the id of the User 

//GET ALL
router.get("/", getAllUsers); //get all Users       

export default router;