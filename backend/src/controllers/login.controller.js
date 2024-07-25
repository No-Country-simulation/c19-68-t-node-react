import asyncHandler from "../middlewares/asyncHandler.js";
import loginService from "../services/login.service.js";

class LoginController {
  confirm = asyncHandler(async (req, res) => {
    const { confirmationString } = req.params;
    try {
      const confirmedUser = await loginService.confirm(confirmationString);
      res.status(200).json({ msg: "Successfully Confirmed User" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ msg: error.message });
    }
  });

  login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
      const userLogged = await loginService.login(email, password);
      res.status(200).json(userLogged);
    } catch (error) {
      res.status(error.statusCode || 500).json({ msg: error.message });
    }
  });
}

export default new  LoginController()