const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./api/user/user.router"); //import
app.use("/api/user", userRouter); //implementasi

const port = 4000;
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});