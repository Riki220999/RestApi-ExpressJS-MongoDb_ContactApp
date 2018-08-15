const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const contactroutes = require("./routes/contact-routes");

// Koneksi MongoDb Menggunakan Mongoose
mongoose.connect("mongodb://localhost:27017/contacts", { useNewUrlParser: true })
.then(() => console.log('Konek Mantapss'))
.catch(err => console.log(err.message))


const app = express();
app.use(bodyParser.json())

// Mengimport Router
app.use("/kontak", contactroutes)

const port = 1999 || process.env.PORT;
app.listen(port, () => console.log(`Terpasang Pada Port ${port}`))