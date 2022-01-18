const express = require("express")
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')

// Requires config of the DotENV
dotenv.config();


//Communicates to MongoDB after cluster is created and .ENV are brought in
mongoose
    .connect(process.env.MONGO_SECRET_KEY)
    .then(() => 
        console.log('DB Connected Successfully!'))
    .catch((err) => {
        console.log(err)
    });

// Uses the routes created in routes folder
    app.get('/api/test', () => {
        console.log('test is successful')
    })


app.use(express.json())
// Uses the routes created in routes folder
app.use("/api/users", userRoute);

//App initialized and listens on specified port w/ fallback
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening and running`)
})

