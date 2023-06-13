const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    FirstName: {
      type: String, 
    },
    MiddleName: {
      type: String,
      required: false,
    },
    LastName: {
      type: String,
      trim: true,
    },
    LoanPurpose: {
      type: String,
      trim: true,
    },

    City: {
      type: String, 
      trim: true,
    },

    ZIP: {
      type: Number,
      trim: true,
    },
    State: {
      type: String,
      trim: true,
    },
    LoanAmount: {
      type: String,
      trim: true,
    },
    DOB: {
      type: Date,
      
      trim: true,
    },
    Email: {
      type: String,
      
      trim: true,
      unique: true,
    },
    HPhone: {
      type: String,
      trim: true,
      unique: true,
    },
    MPhone: {
      type: String,
      
      trim: true,
      unique: true,
    },
    SSN: {
      type: String,
      
      trim: true,
      unique: true,
    },
    Address1: {
      type: String,
    },
    Address2: {
      type: String,
      required: false,
    },
    RDate: {
      type: Date,
      trim: true,
    },
    Rtype: {
      type: String,
      
    },
    Aincome:{
      type: Number,
      trim: true,
    },
    EmpPhone: {
      type: String,
      trim: true,
      unique: true,
    },
    Empname: {
      type: String, 
    },

    Emptype: {
      type: String, 
    },
    status: {
      type: String,
      default:'Pending'
    }

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;