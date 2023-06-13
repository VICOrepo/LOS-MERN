const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.ATLAS_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
 }
 
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


const userRouter = require('./routes/users');
app.use('/users',userRouter);
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});