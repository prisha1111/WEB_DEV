//routing in express->2types:application level, router level
const express = require('express')
const app = express()
const port = 3000

const routerbird=require("./birds")
// const m1=function(req,res,next){
//   console.log("this is middleware");
//   next();
// }

app.use('/abcd',routerbird);
// // app.use(m1);
// app.get('/',(req,res)=>{
//   res.send("this is home page");
// })

// app.post('/',(req,res)=>{
//   res.send("this is post page");
// })

// app.put('/',(req,res)=>{
//   res.send("this is put page");
// })

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.use('/user/:id', (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })

// app.get('/user/:id', (req, res, next) => {
//   res.send('USER')
// })


function mylogurl(req,res,next){
  console.log('Request type',req.originalUrl);
  next();
}
function mylog(req,res,next){
  console.log('Request type',req.method);
  next();
}
const logstuff=[mylogurl,mylog]
app.get('/user/:id',logstuff,(req,res,next)=>{
  res.send("logstuff");

})

//wild card error handler
app.use('/',(req,res)=>{
  console.log("error");
  res.status(500).send("errorrr");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
