"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Express, Request, Response } from 'express'
const dotenv_1 = __importDefault(require("dotenv"));
//
dotenv_1.default.config();
//
// const app: Express = express()
// const port = process.env._PORT
//
const Mongo_1 = require("./utils/Mongo");
Mongo_1.Connect
    .getDb()
    .then(console.log)
    .catch(console.error);
