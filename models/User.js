import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  password: { 
    type: String, 
    required: true,
    minlength: 6
 },
 resetPasswordToken: { type: String },  
 resetPasswordExpires: { type: Date },
 isVerified: { type: Boolean, default: false }, 
  otp: { type: String }, // 
  otpExpires: { type: Date },
  verificationToken: { type: String },
  profilePic: { type: String, default: "" },
  emergencyContacts: [
    {
      name: { type: String, required: true },
      relation: { type: String, required: true },  //Father, Mother, Brother, etc.
      phone: { type: String, required: true }
    }
  ], 
  isVerified: { type: Boolean, default: false },
  discreetCode: { type: String, default: "HELP123" },
},{ timestamps: true });

export default mongoose.model("User", userSchema);
