import User from "../models/User.js";   //import User model      
import bcrypt from "bcryptjs";         //import bcryptjs
import jwt from "jsonwebtoken"; //import jsonwebtoken

export const register = async (req, res, next) => {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash,
        })
        await newUser.save();
        res.status(200).json("User created successfully");
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) {return next((404, "User not found"));}

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {return next((400, "User or password is incorrect"));}
        
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const {password, isAuth, ...otherDetails} = user._doc;

        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json({...otherDetails});
    } catch (err) {
        next(err)
    }
}