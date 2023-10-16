import express from "express"
import mongoose from "mongoose"
import methodOverride from "method-override"
import path from "path"
import {dirname} from "path"
import { fileURLToPath } from "url"
import Patient from "./models/patient.js"

const app = express();
const {Schema, model} = mongoose;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PORT = 8000


async function main(){
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/careKeeper');
    console.log("MONGO CONNECTED!")
  }
  catch(err){
    console.log(err, "ERROR!")
  }
}
main()
  

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("layouts", "layouts/layout")

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static("public"))

app.get("/", (req,res)=>{
  res.render("index")
})

app.get("/patientDetails", async(req,res)=>{
  const patient = new Patient({
    firstName: "John", 
    lastName: "Smith",
    dateOfBirth: "1960-01-01",
    medications:[{medicineName:"Tylenol", doseStrength: 500, instructions:"Two tablets every eight hours. Do not exceed 6 per day."}]
  })
  await patient.save()
  res.send(patient)
})


app.listen(PORT, ()=>{
  console.log(`Whoa! Your server is totally running on port ${PORT}`)
})