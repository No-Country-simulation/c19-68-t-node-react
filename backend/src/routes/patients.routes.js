import { Router } from "express";

const router = Router();

/* Nota: en las arrow funtions es donde iria los controladores pero como no se tienen todavia
por eso solo se contiene mensajes */

router.post("/register", (req, res)=> {
  res.status(200).json({message: "register"});
})

router.post("/login", (res, req)=> {
  const {email, password} = req
  res.status(200).json({message: "login", email, password});
})

router.get("/profile", (res, req)=> {
  res.status(200).json({message: "profile"});
})

router.get("/showAll", (res, req)=> {
  res.status(200).json({message: "view all users"});
})


export default router;