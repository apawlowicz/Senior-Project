const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the node api." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
    Role.create({
      id: 1,
      name: "Administrator"
    });
   
    Role.create({
      id: 2,
      name: "Executive"
    });
   
    Role.create({
      id: 3,
      name: "Delivery Manager"
    });

    Role.create({
      id: 4,
      name: "STE"
    });

    Role.create({
      id: 5,
      name: "RTE"
    });

    Role.create({
      id: 6,
      name: "PO"
    });

    Role.create({
      id: 7,
      name: "SM"
    });

    Role.create({
      id: 8,
      name: "standard user"
    });
}



