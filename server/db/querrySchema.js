import mongoose from "mongoose";

const querrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const Message = mongoose.model("MESSAGE", querrySchema); //collection name is "messages"

export default Message;
