
import { response } from "express";
import { ObjectId } from "mongodb";
import db from "./../db.js"
const balanceCollection = db.collection("balanceCollection");
const userCollection = db.collection("usersCollection");

export async function getBalance (req, res) {
    try{
        // const user = await userCollection.findOne({_id: userId})
        // const userBalance = await balanceCollection.findMany({userId});
        res.send(res.locals.user).status(200)
    } catch (err){
        res.send(err)
    };
}

export async function postBalance (req, res) {
    try{

    } catch (err){
        res.send(err)
    };
}

export async function deleteBalance (req, res) {
    try{

    } catch (err){
        res.send(err)
    };
}

export async function putBalance (req, res) {
    try{

    } catch (err){
        res.send(err)
    };
}