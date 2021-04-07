const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    },
    email:{
    type:String,
    required:true
    },
  age: {
    type: Number,
    required: true,
  },  
 },
{
    versionKey: false,
  },
  
  );

module.exports = mongoose.model("Student", studentSchema);
