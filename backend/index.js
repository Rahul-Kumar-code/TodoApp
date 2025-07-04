const express = require('express');
const cors = require('cors');
const app = express();

const userRouter = require('./routes/user');
const { default: mongoose } = require('mongoose');

app.use(cors()); // Allow React app to access backend
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRouter);

const port = process.env.PORT || 5000;
const db_path = process.env.MONGODB_URI;

mongoose.connect(db_path).then(()=>
  {
    app.listen(port, () => {
      console.log("connected to mongo");
    console.log(`Server running on http://localhost:${port}`);
});
}).catch((err)=>{
  console.error("Error connecting to MongoDB:", err); 
})
