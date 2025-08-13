
// const express = require("express");
// const app = express();
// const PORT = 3000;
// const hbs = require("hbs");
// const path = require("path");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });


// // Register partials
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/tmp/my-uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });
// hbs.registerPartials(path.join(__dirname, "views", "partials"));


// app.set("view engine", "html");
// app.engine("html", require("hbs").__express);

// app.post("/profile", upload.single("avatar"), function (req, res, next) {
//   console.log(req.body);
//   res.redirect("/");
// });



// app.get("/", (req, res) => {
//   res.render("home.hbs", {
//     firstName: "neha",
//     lastName: "kaur",
//   });
// });
// app.get("/products", (req, res) => {
//   res.render("products.hbs", {
//     id: "p101",
//     name: "Wireless Mouse",
//     price: 799.99,
//     currency: "INR",
//   });
// });
// app.listen(PORT, () => {
//   console.log("Server is Running on port ");
// });


const express = require("express");
const app = express();
const PORT = 3000;
const hbs = require("hbs");
const path = require("path");
const multer = require("multer");

// Register partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Set view engine
app.set("view engine", "html");
app.engine("html", require("hbs").__express);

// ✅ Serve static files from 'uploads' folder so browser can see them
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads")); // safer than /tmp
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// ✅ Upload route
app.post("/profile", upload.single("avatar"), (req, res, next) => {
  console.log(req.file); // uploaded file info
  res.redirect("/uploads/" + req.file.filename); // view uploaded file
});

// ✅ Home route
app.get("/", (req, res) => {
  res.render("home.hbs", {
    firstName: "neha",
    lastName: "kaur",
  });
});

// ✅ Products route
app.get("/products", (req, res) => {
  res.render("products.hbs", {
    id: "p101",
    name: "Wireless Mouse",
    price: 799.99,
    currency: "INR",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
