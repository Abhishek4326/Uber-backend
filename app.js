// const dotenv = require('dotenv');
// dotenv.config();
// const express = require('express');
// const cors = express();
// const app = express();

// app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// module.exports = app;



const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors'); // Correctly import cors
const app = express();

app.use(cors()); // Use cors as middleware

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;