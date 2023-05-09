import express from "express";
import UserController from "../controller/user.controller.js"

//setting up your user router
const router = new express.Router()

//user creation route
router.post("/create", UserController.createUser)

//exporting the user router
export default router

export const obj = {name:"Abbie"}

export function callName(){
    console.log("calling", obj.name)
}