const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use('/api', require('./routes/authRoutes'));

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));