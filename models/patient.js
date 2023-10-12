import mongoose from "mongoose"

const {Schema, model} = mongoose

const PatientSchema = new Schema({
  firstName:{
    type:String,
    required:[true, "Please enter a first name"]
  },
  lastName:{
    type:String,
    required:[true, "Please enter a last name"]
  },
  dateOfBirth:{
    type: Date,
    required: [true, "Please enter a date of birth "]
  },
  Medications:{
    name:{
      type:String,
      required:[true, "Please enter a name for the medication"]
    },
    dosage:{
      type:String,
      required:[true, "You need to enter the dosage"]
    }
  }
    
})