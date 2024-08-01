import User from "../Models/userModel.js";

export const getAllusersForSidebar=async(req,res)=>{
    try {
        const loggedinUser = req.user._id;
        const users = await User.find({ _id: { $ne: loggedinUser } });
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}