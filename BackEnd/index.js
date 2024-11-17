const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions =
{
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true }));

const db = require("./models");

db.sequelize.sync({force:true}).then(() => //force:true borra las tablas existentes y las creará de nuevo
{
    console.log("Drop and re-sync db.");
});

//End-Point escuchando en 8080
app.get("/", (req,res) =>
{
    res.json({message: "Welcome to bicycles application. "});
});

require("./routes/ejercicio.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
{
    console.log('Server is running on port ${PORT}.');
});