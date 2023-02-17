import cors from "cors"
import express from "express"
import helmet from "helmet"
import unexpectedErrorMiddleware from "./api/middlewares/error.global"
import { apiRouter } from "./api/controlers/api.router"
import * as dotenv from 'dotenv'



dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })

const app = express()

app.use(helmet())

app.use(express.json())

app.use(cors())

app.use(apiRouter)

app.use(unexpectedErrorMiddleware)

export default app;