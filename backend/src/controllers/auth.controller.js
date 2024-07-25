import asyncHandler from "../middlewares/asyncHandler.js";
import authService from "../services/auth.service.js";

const authController = {
  /**
   * There is no need to surround functions in a try catch, 
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
    //Sending id from user as a cookie
    const id = userLogged._id.toString();
    res.cookie("sessionId", id), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
    //Sending ONLY the user ID, change the JSON response for development purposes
    res.status(200).json(id);
 }),
  logout: asyncHandler(async(req, res) => {
    res.cookie("sessionId", "", {
      httpOnly: true,
      expires: new Date(0)
    });
    res.status(200).json({msg: "Successful logout"});
  })
};

export default authController;