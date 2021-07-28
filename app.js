const express = require("express");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const users = require('./routes/api/users');
const passport = require('passport');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", users);

app.listen(port, () => console.log(`Server running on port ${port}`))