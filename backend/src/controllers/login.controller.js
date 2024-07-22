import { doctorManager } from "../dao/index.dao.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { loginService } from "../services/login.service.js";

const controllerLogin = {
  
  login: asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const logged = await new loginService().login(email, password);
    if(!logged) {
      return res.status(403).json({msg: "Authentication Error"})
    }
    res.status(200).json(logged);
  }),

  confirm: asyncHandler(async(req, res) => {
    const {token} = req.params;
    const confirmed = await new loginService().confirm(token);
    if(!confirmed) {
      return res.status(401).json({msg: "Token error ", error: error.message});
    }
    res.json({msg: "Succesfully confirmed user"});
  }),

  logOut: async (req, res) => {
    res.status(200).json({ message: "logout" });
  },

};

export default controllerLogin;
