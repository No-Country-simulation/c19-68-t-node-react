//import jwt from 'jsonwebtoken';
import Doc from '../dao/models/doctor.model.js';

export const checkAuth = async (req, res, next) => {
  /*
  let token
  
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      
      //decodedToken will store the doctor's ID
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decodedToken)

      //
      const doctorSession = await Doc.findById(decodedToken.id).select('-pass -token -confirmed')
      console.log(doctorSession)
      return next()
    } catch (error) {
      error = new Error('Invalid Token')
      return res.status(403).json({msg: error.message})     
    }
  }

  if(!token) {
    const error = new Error('Invalid or non-existent token')
    res.status(403).json({msg: error.message})
  }
  next()
  */
}