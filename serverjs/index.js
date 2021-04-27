const Express = require("express"),
App=Express(),path=require("path")
App.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
App.get("/",(req,res)=>{
    res.json({"test":"done"})
})
App.listen(process.env.PORT||5000,"localhost",()=>{console.log("was");})