import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: false
  },
  tokens: [
    {
      token: {
        type: String,
        default: null
      }
    }
  ]
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
    this.cpassword = await bcrypt.hash(this.cpassword, 12)
  }
  next()
})
//generating JWT tokens

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)

    this.tokens = this.tokens.concat({ token: token })
    await this.save()
    return token
  } catch (err) {
    console.log(err)
  }
}

const User = mongoose.model('USER', userSchema)

export default User
