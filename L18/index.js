//routing in express->2types:application level, router level
const express = require('express')
const app = express()
const port = 3000
const birds=require('./birds')
// app.METHOD(Path,method)
// GET method route

// app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })
app.use('/birds',birds);
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })

//splat->it includes all urls excepts root or slash
// app.get('/*splat',async(req,res)=>{
//     res.send('ok');
// })

// app.get('{/*spat}',async(req,res)=>{
//     res.send('ok');
// })

//new way of express 5
// app.get(['/discussion/:slug', '/page/:slug'], async (req, res) => {
// res.status(200).send('ok')
// })
// ------------------------------------------
// OLD VERSION
//was used in prev version
// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// }) //b was optional, acd and abcd


// app.get('/ab+cd',(req,res)=>{
//     res.send('ok');
// }) //b can be how many in url
// app.get('/ab*cd',(req,res)=>{
//     res.send('ok');
// })//url can add anything between a and c
// ---------------------------------------------------
// app.get('/.*fly$',(req,res)=>{
//     res.send('okk');
// }) // add anything in start of fly in url

// app.get('/example/a',(req,res)=>{
//     res.send('ok');
// })
// app.get('/exaple/bb',(req,res,next)=>{
//     console.log("middleware");
//     next();
// },(req,res)=>{
//     console.log("next");
// })

// --------------------------------------------
//callback functions
// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// const cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2]) //calls 3no functions
// ---------------------------------------------------


//next is oredefined, whatever that is next will be called

// ------------------------------------------------------
// const cc=function(req,res,next){
//     console.log("cc");
//     next()
// }
// const cc1=function(req,res,next){
//     console.log("cc1");
//     next();
// }

// app.get('/midd/a',[cc,cc1],(req,res,next)=>{
//   console.log('nextt');
//   next()
// },(req,res)=>{
//   console.log("okjkk");
// })
// -----------------------------------------------------------


// app.route('/book')
// .get((req,res)=>{
//   res.send("hii");
// })
// .post((req,res)=>{
//   res.send("hiiii");
// })
// .put((req, res) => {
//     res.send('hey');
// })



////////////////////////////////////////////

// const router=express.Router();
// const m1=function(req,res,next){
//   console.log("m1");
//   next();
// }
// const m2=function(req,res,next){
//   console.log("m2");
//   next();
// }
// app.get("/home",m1,m2,(req,res)=>{
//   console.log("home");
//   res.send("this is home api");
// })
// router.get("/login",m1,m2,(req,res)=>{
//   console.log("login");
//   res.send("this is login api");
// })


////////////////////////////////////////////

// POST method route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage')
// })

// app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
