// const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/tarunsoni", {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log("connection successful");
// }).catch((error) =>  {
//     console.log(error);
// })

//db.js

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tarunsoni:Tarun_2002@cluster0.1peqn.mongodb.net/?retryWrites=true&w=majority');

//const url = `mongodb+srv://tarunsoni:Tarun_2002@cluster0.1peqn.mongodb.net/?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })