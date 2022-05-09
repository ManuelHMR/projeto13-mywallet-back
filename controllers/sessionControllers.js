import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { v4 } from "uuid";

import db from "./../db.js";
const sessionsCollection = db.collection("sessionsCollection");
const usersCollection = db.collection("usersCollection");

export async function signIn (req, res) {
    try{
        const token = v4();
        const {user} = res.locals;
        const data = {
            userId: user._id,
            token
        }
        await sessionsCollection.insertOne(data)
        res.send(token)
    } catch (err){
        res.send(err)
    };
};

export async function signUp (req, res) {
    const {name, email, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    try{
        await usersCollection.insertOne({
            name,
            email,
            password: hashPassword
       });
        return res.sendStatus(200)
    
    } catch (err){
        res.send(err)
    };
};

export async function signOut(req, res){
    try{
        const token = req.headers.token.replace(/"/g,"").trim();
        await sessionsCollection.deleteOne({token});
        res.sendStatus(200)
    }catch(err){
        res.send(err)
    }  
};