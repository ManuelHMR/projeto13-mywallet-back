import bcrypt from "bcrypt";
import { v4 } from "uuid";
import joi from "joi";
//express?

import db from "./../db.js";
const sessionsCollection = db.collection("sessionsCollection");

export async function signIn (req, res) {
    try{

    } catch (err){
        res.send(err)
    };
};

export async function signUp (req, res) {
    const {email, password} = req.body;
    const {name} = req.headers.user;
    const hashPassword = bcrypt.hashSync(password);
    try{
       sessionsCollection.insertOne({
            name,
            email,
            password: hashPassword
       });
    } catch (err){
        res.send(err)
    };
};