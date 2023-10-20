import mongoose from "mongoose"

const {Schema, model} = mongoose

const medicineSchema = new Schema({
    medicineName:{
      type:String,
      require:[true, "Please enter the name of the medicine"]
    },
    doseStrength:{
      type:Number,
      require:[true, "Please enter the strength of the medication"]
    },
    dosageUnit:{
      type:String,
      require:[true, "Please enter the unit of dosage"],
      enum: ["kilogram(Kg)", "gram(g)", "milligram(mg)", "microgram(μg)", "litre(L)", "millilitre(ml)", "teaspoon(tsp)", "tablespoon(tbs)", "capsule", "tablet", "syringe"]
    },
    directions:{
      type:String,
      require:[true, "Please enter the directions for the medication"]
    },
    warnings:{
      type:String,
      require:[true, "Please enter the warning for the medication"]
    }
  }
)

const doctorSchema = new Schema({
  doctorName:{
    type:String,
    required:[true, "Please enter the name of the doctor"]
  },
  doctorSpeciality:{
    type:String,
    required:[true, "Please enter the doctors speciality"]
  }
})

const patientSchema = new Schema({
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
  medications:[medicineSchema],
  doctors:[doctorSchema]
})

const Patient = model("Patient", patientSchema)


export default Patient 
