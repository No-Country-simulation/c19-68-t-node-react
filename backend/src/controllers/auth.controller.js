import asyncHandler from "../middlewares/asyncHandler.js";
import authService from "../services/auth.service.js";
import { serialize } from "cookie";

const authController = {
  /**
   * There is no need to surround code inside functions in a try catch, 
   * the asyncHandler method takes care of that.
   */
  confirm: asyncHandler(async(req,res) => {
    const {confirmationString} = req.params;
    const confirmedUser = await authService.confirm(confirmationString);
    if(!confirmedUser) {
      return res.status(401).json({msg: "Invalid Confirmation Code"})
    }
    res.status(200).json({msg: "Succesfully Confirmed User"});
  }),

  login: asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const userLogged = await authService.login(email, password);
    if(!userLogged) {
      return res.status(403).json({msg: "Authentication Error"});
    }
    const {_id, role} = userLogged;
    const id = _id.toString();
    const userData = {id, role};
    //Create an object with ID and ROLE properties  
    const userDataJson = JSON.stringify(userData)

    //Sending cookie
   res.setHeader('Set-Cookie', serialize('sessionData', userDataJson, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== "development", // Only HTTPS on producction
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      encode: (val) => val //Avoid cookie encoding
  }));
    //Sending ONLY the user ID and ROLE, change the JSON response for development purposes
    res.status(200).json({id, role});
 }),
  logout: asyncHandler(async(req, res) => {
    res.cookie("sessionId", "", {
      httpOnly: false,
      expires: new Date(0)
    });
    res.status(200).json({msg: "Successful logout"});
  })
};

export default authController;
