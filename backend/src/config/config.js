import dotenv from 'dotenv'
dotenv.config({
    path: './src/config/.env'
})

export const PORT = process.env.PORT || 8080
export const MONGODB_URL = process.env.MONGODB_URL;