const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || "8070";

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

/*mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
});*/

mongoose.connect(URL);

mongoose.set('strictQuery', true);

const connection = mongoose.connection;
connection.once("open", function () {
        console.log("Mongodb Connection Success!");
    })

app.listen(PORT, () => {
    console.log('Server is up and running on port no ' + PORT)
})

const salesexecutiveRouter = require("./routes/SalesExecutives.js");
app.use("/salesexecutive",salesexecutiveRouter);

const deliverydriverRouter = require ("./routes/DeliveryDrivers.js");
app.use("/deliverydriver",deliverydriverRouter);

const adminRouter = require ("./routes/Admins.js");
app.use("/admin",adminRouter);

const loginRouter = require("./routes/Logins.js");
app.use("/login",loginRouter);

const leaveRouter = require("./routes/LeaveApplications.js");
app.use("/leave",leaveRouter);

const salaryRouter = require("./routes/Salaries.js");
app.use("/salary",salaryRouter);

const transactionRouter = require("./routes/Transactions.js");
app.use("/t",transactionRouter);