import { Router } from "express";

const router = Router();

/* Nota: en las arrow funtions es donde iria los controladores pero como no se tienen todavia
esta contenido en las rutas */

router.post("/registerDoc", (req, res) => {
  res.status(200).json({ message: "register a doctor" });
});

router.post("/loginDoc", (res, req) => {
  const { email, password} = req.body

  res
    .status(200)
    .json({ message: "login the doctor succesfully", email, password });
});

router.post("/logoutDoc", (res, req) => {
  //const {token} = req.body
  res.status(200).json({ message: "logout doctor" });
});

router.get("/profileDoc", (res, req) => {
  res.status(200).json({ message: "doctor's profile" });
});

router.get("/showAllDoc", (res, req) => {
  res.status(200).json({ message: "view all doctors" });
});

export default router;
