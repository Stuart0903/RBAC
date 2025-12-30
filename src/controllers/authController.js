const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res)=>{
    try{
    const {email, password, role} = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        password: hashedpassword,
        role
    });

    await newUser.save();
    res
    .status(201)
    .json({message: 'User registered successfully'});
    }catch(error){
        res
        .status(500)
        .json({message: 'Server error'});
    }
};

const userLogin = async (req, res)=> {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res
            .status(400)
            .json({message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res
            .status(400)
            .json({message: 'Password is incorrect'});
        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role, 
            },process.env.JWT_SECRET,{expiresIn: '1h'}
        );
        res
        .status(200)
        .json({
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        }
        )
    }catch(error){
        res
        .status(500)
        .json({message: 'Server error'});
    }
}




module.exports = {userRegister, userLogin};