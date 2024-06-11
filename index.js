const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})

// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
// const app = express();

// app.use(cors());
  
// app.use(express.json());

// app.listen(3005, () => {
//     console.log(`Server Started at ${3005}`)
// })

// const routes = require('./routes/routes');

// app.use('/api', routes)
