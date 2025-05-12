class authController{
    admin_login= async (req, res) => {
        try {
            console.log("Admin login request received", req.body);
            // const { email, password } = req.body;
            // if (!email || !password) {
            //     return res.status(400).json({ message: "Please provide email and password" });
            // }
            // // Assuming you have a User model and a method to find a user by email
            // const user = await User.findOne({ email });
            // if (!user) {
            //     return res.status(401).json({ message: "Invalid credentials" });
            // }
            // // Assuming you have a method to compare passwords
            // const isMatch = await user.comparePassword(password);
            // if (!isMatch) {
            //     return res.status(401).json({ message: "Invalid credentials" });
            // }
            // // Assuming you have a method to generate a token
            // const token = user.generateToken();
            // res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new authController();
// const express = require('express');