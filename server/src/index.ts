// import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
//
dotenv.config()
//
// const app: Express = express()
// const port = process.env._PORT
//

import { Connect } from './utils/Mongo'

Connect
  .getDb()
  .then(console.log)
  .catch(console.error)
