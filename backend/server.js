const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/postRoutes');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
connect__url = 'mongodb+srv://jacob345:jacob345@cluster0.smzoo.mongodb.net/posts?retryWrites=true&w=majority'

mongoose.connect(connect__url, {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true

})

app.use(router);
app.listen(PORT, () => console.log(`server running on port${PORT} `));
