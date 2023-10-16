import mongoose from "mongoose"
import Patient from "../models/patient.js"

const {Schema, model} = mongoose

async function main(){
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/careKeeper')
    console.log('Database connected')
  }
  catch(err){
    console.log(err, "Error. MongoDB did not connect!")
  }
}

main()

const seeds = [
  {
    firstName:"John",
    lastName:"Smith",
    dateOfBirth: "1979-6-15",
    medications:[
      {
        medicineName: "Tylenol",
        doseStrength: 500,
        dosageUnit: "milligram(mg)",
        directions:"Take two 500mg pills every eight(8) hours",
        warnings: "Do not exceed 4000mg per day"
      },
      {
        medicineName: "Aleve",
        doseStrength: 220,
        dosageUnit: "milligram(mg)",
        directions:"Take two 220mg pills every 24 hours",
        warnings: "Do not exceed 440mg per day"
      }
    ]
  },
  {
    firstName:"Jane",
    lastName:"Doe",
    dateOfBirth: "1985-10-10",
    medications:[
      {
        medicineName: "Advil",
        doseStrength: 200,
        dosageUnit: "tablet",
        directions:"1 to 2 200mg tablet/caplet/gel caplet every 4 to 6 hours ",
        warnings: "Do not exceed 6 tablets/caplets/gel caplets in 24 hours unless directed by a doctor."
      },
      {
        medicineName: "Excedrin",
        doseStrength: 2,
        dosageUnit: "milligram(mg)",
        directions:"Take 2 tablets every 6 hours",
        warnings: "Do not exceed more than 8 tablets in 24 hoursy"
      }
    ]
  },
]

const seedDB = async() =>{
  await Patient.deleteMany({})
  await Patient.insertMany(seeds)
}

seedDB()