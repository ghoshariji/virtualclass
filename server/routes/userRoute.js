const router = require("express").Router();
const userModel = require("./model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// installing bcrypt and jwt


//   creating the user route registration

router.post("/signup",async(req,res)=>{
    try {
        // checking if the user exist or not
        const userExist = await userModel.find({email:req.body.email});
        if(userExist)
        {
            return res.status(200).send({message:"User already Exist",success:false});
        }
        // hasing the password

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password,salt);
            req.body.password = hashPassword;

            // creating a new user

            const newUser = new userModel(req.body);

            // saving the user detail in the database

            await newUser.save()
            res.send({
                message:"USer created successfully",
                success:true
            })

    } catch (error) {
        res.status(500).send({
            message:error.message,
            data:error,
            success:false
        })
    }
})


// login api

router.post("/login",async(req,res)=>{
    try {
        const user = await userModel.find({email:req.body.email});
        if(!user)
        {
            res.send({
                message:"User don't exist",
                success:true
            })
        }
        // check valid-password

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if(!validPassword)
        {
            return res.status(500).send({
                message:"Invalid password",
                success:true
            })
        }

        // generating token for expiring the login facilty automatically after 30 days
        const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{
            expiresIn:"30d"
        })

        res.send({
            message :"User login successfully",
            success:true
        })

    } catch (error) {
        res.status(500).send({
            message:error.message,
            success:false
        })
    }
})


module.exports = router