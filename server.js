import express from "express"
import mongoose from "mongoose"
import methodOverride from "method-override"
import path from "path"
import {dirname} from "path"
import { fileURLToPath } from "url"

const app = express();
const {Schema, model} = mongoose;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PORT = 8000

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("layouts", "layouts/layout")

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static("public"))

app.get("/", (req,res)=>{
  res.render("index")
})


app.listen(PORT, ()=>{
  console.log(`Whoa! Your server is totally running on port ${PORT}`)
})