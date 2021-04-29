const Express = require("express"),
App=Express(),path=require("path"),
MySql=require("mysql2"),
Connection= MySql.createConnection({
    host: "localhost",
    database: "nastya",
    password: "radeongraphics",
    user: "root",
}).promise();
App.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
App.get("/getNews",(req,response)=>{
    Connection.query("select * from news").then((res,error)=>{
        response.json({"data":res[0]});
    })
})
App.listen(process.env.PORT||5000,"localhost",()=>{console.log("was");})