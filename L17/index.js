const express = require('express')
const app = express()
const port = 3000
// app.METHOD(Path,method)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('This is user')
})

app.post('/user',(req,res)=>{
    res.send("post request")
})
//app.use()->can handle any method, that is why middleware
//
app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.all('/se',(req,res,next)=>{
  console.log("thiss");
  next();
})
//app.all()->registers a middleware for any http method
//next->function that passes control to next matching route or middleware
// express.static(root,[options])
app.use(express.static('public'))
app.use('/static',express.static('public'))


// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//postgresql,express