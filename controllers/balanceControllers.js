
import { response } from "express";
import { ObjectId } from "mongodb";
import db from "./../db.js"
import dayjs from "dayjs";

const balanceCollection = db.collection("balanceCollection");
const userCollection = db.collection("usersCollection");

export async function getBalance (req, res) {
    const id = res.locals.user.userId;
    try{      
        const user = await userCollection.findOne({_id: id})
        const userBalance = await balanceCollection.find({userId: id}).toArray();
        let total = 0;
        userBalance.forEach(e => {
            if(e.type === "income"){
                total += e.value
            }
            else{
                total -= e.value
            }
        })
        res.status(200).send({
            name: user.name,
            userBalance, 
            total
        })
    } catch (err){
        console.log(err)
        res.send(err)
    };
}

export async function postBalance (req, res) {
    const {value, description, type} = req.body;
    try{
        const id = res.locals.user.userId;
        const user = await userCollection.findOne({_id: id});
        await balanceCollection.insertOne({
            userId: id,
            value,
            description,
            type,
            date: dayjs().format("DD-MM").replace("-", "/")
        });
        res.sendStatus(200)
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