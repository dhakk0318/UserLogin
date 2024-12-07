const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");
const userRouter = require("./routes/userRoutes");

dotenv.config();  

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

 app.use(cors({
  origin: process.env.FRONTEND_URL,  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,   
}));

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
