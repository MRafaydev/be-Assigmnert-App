import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database/database.js";
import userRoute from "./routes/user-routes.js";
import blogRoute from "./routes/blog-routes.js";
import pricingRoute from "./routes/pricing-routes.js";
import contactUsRoute from "./routes/contact-us-routes.js";
import { PORT } from "./constants.js";

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json({limit:"50mb",
extended: true,
parameterLimit:5000}));
connectDB()
app.use('/user',userRoute)
app.use('/blogs',blogRoute)
app.use('/pricing',pricingRoute)
app.use('/contact-us',contactUsRoute)
app.listen(PORT,()=>console.log(`The app is listening on ${PORT}`))