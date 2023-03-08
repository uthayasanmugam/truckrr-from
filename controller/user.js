import User from "../model/user.js"

export const userRegister = async (req, res) => {    
    let email = req.body.email
    let exUser = await User.find({ email: email })
    if (exUser) {
        return res.status(400).json({ message: "email already register" })
    }
    else {
        let register = new User({
            vendorname : req.body. vendorname,
            vendortype: req.body.vendortype,
            address: req.body.address,
            pincode:req.body.pincode,
            email: req.body.email,
            mobileno: req.body.mobileno,
          //image: req.body.gender,    
            })
            try {
                let user=await register.save()
                res.status(201).json({ message: "Register success" ,id:user._id})
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
     }
}
export const getsingleUser = async (req, res) => {
    try {
        const getUser = await User.find({ address: req.query.address}).select("-password")
        res.status(200).json({ data: getUser })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
      }

// export const search = async (req,res)=>{
//     try{
//         const getUser= await address.find({ address: req.query.address })
//         res.sent(200).json({ data: getUser })
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }