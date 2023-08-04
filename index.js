const connectToMongo = require('./db')
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

connectToMongo();
app.use(cors());
app.use(express.json())

app.use('/data',require('./routes/Newsdata'))

app.listen(port,()=>{
    console.log(`you are listening at ${port}`)
})
