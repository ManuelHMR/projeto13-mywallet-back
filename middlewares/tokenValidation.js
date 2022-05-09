import db from "./../db.js"

const sessionsCollection = db.collection("sessionsCollection");

export async function tokenValidation(req, res, next){
    try{
        const user = await sessionsCollection.findOne({token: req.headers.token});
        if(!user){
            return res.sendStatus(404);
        };
        res.locals.user = user;
        next()
    } catch (err){
        res.send(err);
    }
}