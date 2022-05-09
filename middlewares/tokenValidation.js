import db from "./../db.js"

const sessionsCollection = db.collection("sessionsCollection");

export async function tokenValidation(req, res, next){
    try{
        const token = req.headers.token.replace(/"/g,"").trim();
        const user = await sessionsCollection.findOne({token});
        if(!user){
            return res.sendStatus(404);
        };
        res.locals.user = user;
        next()
    } catch (err){
        console.log(err)
        res.send(err);
    }
}