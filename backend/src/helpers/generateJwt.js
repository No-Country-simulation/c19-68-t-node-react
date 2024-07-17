import jwt from 'jsonwebtoken';

function generateJWT(id) {
  return jwt.sign(
    {id}, 
    process.env.JWT_SECRET,
    {
      expiresIn: "30d"
    }
  )
}

export default generateJWT