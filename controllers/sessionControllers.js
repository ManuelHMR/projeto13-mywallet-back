import express from "express";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

import db from "./../db.js";
const sessionsCollection = db.collection("sessionsCollection");

export async function signIn (req, res) {
    try{

    } catch (err){
        res.send(err)
    };
};

export async function signUp (req, res) {
    const {name, email, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    try{
        await sessionsCollection.insertOne({
            name,
            email,
            password: hashPassword
       });

    return res.status(200)
    
    } catch (err){
        res.send(err)
    };
};