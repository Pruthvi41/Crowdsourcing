const express = require('express');
const connectDatabase = require('./config/db');
var cors = require('cors')
const Duck = require('./models/Duck');
const app = express();
connectDatabase();
app.use(express.json({ extended: false }));
app.use(cors());
app.post('/', async (req,res) => {
    const{timeOfTheDay, foodType, duckLocation, duckCount, foodQuantity} = req.body;
    let duckData = new Duck({
        timeOfTheDay,
        foodType,
        duckLocation,
        duckCount,
        foodQuantity
    })
    await duckData.save();
    res.send("ok done");
});
app.get('/', (req,res)=>{
    Duck.find({}).then((duck)=>{
        res.send(duck);
    })
})
const PORT = process.env.PORT||5000;
app.listen(PORT, ()=>console.log(`Server started successfully on ${PORT}`));