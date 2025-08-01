//routing in express->2types:application level, router level
const express = require('express')
const app = express()
const port = 3000

//overriding sendStatus code
// app.response.sendStatus = function (statusCode, type, message) {
//   // code is intentionally kept simple for demonstration purpose
//   return this.contentType(type)
//     .status(statusCode)
//     .send(message)
// }

// app.get('/',(req,res)=>{
//   // res.sendStatus(200)
//   res.sendStatus(200, 'text/plain', '{"error":"All set"}')

// });

// app.get('/error',(req,res)=>{
//   // res.sendStatus(400)
//   res.sendStatus(400, 'application/json', '{"error":"resource not found"}')

// });

// app.get('/unauthorized',(req,res)=>{
//   // res.sendStatus(401)
//   res.sendStatus(401, 'application/json', '{"error":"unauthorized not found"}')

// });

// app.get('/notfound',(req,res)=>{
//   // res.sendStatus(404)
//   res.sendStatus(404, 'application/json', '{"error":"not found"}')

// });
// app.get('/internal',(req,res)=>{
//   // res.sendStatus(500)
//   res.sendStatus(500, 'application/json', '{"error":"server error not found"}')

// });

//TEMPLATE ENGINE USING HBS
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
var hbs=require('hbs')
// const Handlebars = require('handlebars');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    firstname:"Neha",
    lastname:"Kaur"
  });
})

app.get('/products',(req,res)=>{
  res.render('products.hbs',{
    people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
  });
})

app.get('/cart',(req,res)=>{
  res.render('cart.hbs',{
  persons: [
    { name: "Nils", age: 20 },
    { name: "Teddy", age: 10 },
    { name: "Nelson", age: 40 },
  ],
  })
})
// Handlebars.registerPartial("person", "{{person.name}} is {{person.age}} years old.\n")
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
