import asyncHandler from "../middlewares/asyncHandler.js";
import { loginService } from "../services/login.service.js";

const loginController = {
  confirm: asyncHandler(async(req,res) => {
    const {confirmationString} = req.params;
    const confirmedUser = await new loginService().confirm(confirmationString);
    if(!confirmedUser) {
      return res.status(401).json({msg: "Invalid Confirmation Code"})
    }
    res.status(200).json({msg: "Succesfully Confirmed User"});
  }),

  login: asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const userLogged = await new loginService().login(email, password);
    console.log(userLogged);
    if(!userLogged) {
      return res.status(403).json({msg: "Authentication Error"});
    }
    res.status(200).json(userLogged);
  })
}

export default loginController;