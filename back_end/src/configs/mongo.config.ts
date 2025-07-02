import mongoose from 'mongoose'
import { env } from './env.config'


const MONGO_URI = env.MONGO_URI as string

export async function connectDb(){
    try {


        await mongoose.connect(MONGO_URI)
        console.log(`Connected to mongodb on ${env.PORT} `)
    } catch (error) {
        console.log('Mongo Error, ',error)
    }
}