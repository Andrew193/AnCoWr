const Express = require("express"),
App=Express(),path=require("path"),
MySql=require("mysql2"),
Connection= MySql.createConnection({
    host: "localhost",
    database: "nastya",
    password: "radeongraphics",
    user: "root",
}).promise();
App.use(Express.json())
App.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//get
App.get("/getNews",(req,response)=>{
    Connection.query("select * from news").then((res,error)=>{
        response.json({"data":res[0]});
    })
})
App.get("/getComment",(req,response)=>{
    Connection.query("select * from comments").then((res,error)=>{
        response.json({"data":res[0]});
    })
})
App.get("/getRooms",(req,response)=>{
    Connection.query("select * from rooms").then((res,error)=>{
        response.json({"data":res[0]});
    })
})
//post
App.post("/addComment",(req,response)=>{
    Connection.query("insert into comments(name,message,date) values(?,?,?)",Object.values(req.body)).
    then((res,error)=>response.json({"done":true}))

})
App.post("/addQuestion",(req,response)=>{
    Connection.query("insert into question(feed,name,message) values(?,?,?)",Object.values(req.body)).
    then((res,error)=>response.json({"done":true}))
})
App.post("/reg",(req,response)=>{
    Connection.query(`select * from rooms where number=${req.body.number}`).then((res,error)=>{
        Connection.query(`insert into people(number, tipe, floor, price, phone, person) values(?,?,?,?,?,?)`,
        [res[0][0].number,res[0][0].type,+res[0][0].floor,res[0][0].price,res[0][0].phone,req.body.name])
    })
})
App.post("/regCard",(req,response)=>{
   Connection.query("insert into cards(dayin, name, name2, name3, male, bdate) values(?,?,?,?,?,?)",
   [req.body.dayin,req.body.name,req.body.name2,req.body.name3,req.body.male,req.body.bdate])
})
App.listen(process.env.PORT||5000,"localhost",()=>{console.log("was");})