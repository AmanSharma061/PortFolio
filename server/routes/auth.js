import express from 'express';
const router = express.Router ();
import Message from '../db/querrySchema.js';
import User from '../db/userSchema.js';

import bcrypt from 'bcryptjs';

// USER REGISTRATION ROUTE
router.post ('https://portfolio-mjax.onrender.com/register', async (req, res) => {
  const {name, email, password, cpassword, phone, profession} = req.body;
  try {
    const EmailExist = await User.findOne ({email: email});
    const PhoneExist = await User.findOne ({phone: phone});
    if (EmailExist) {
      if (email === EmailExist.email) {
        return res.status (422).json ({error: 'Email'});
      }
    }
    if (PhoneExist) {
      if (phone === PhoneExist.phone) {
        return res.status (422).json ({error: 'Phone'});
      }
    }

    const user = new User ({
      name,
      email,
      password,
      cpassword,
      phone,
      profession,
    });

    const saved = await user.save ();

    if (saved) {
      res.status (200).json ({message: 'User Registered Successfully'});
    }
  } catch (err) {
    console.log (err);
  }
});

// /USER LOGIN ROUTE
router.post ('https://portfolio-mjax.onrender.com/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status (400).json ({error: 'Please fill all the fields'});
    }
    const userLogin = await User.findOne ({email: email});

    if (!userLogin) {
      return res.status (400).json ({error: 'Invalid Credentials'});
    } else {
      const isMatch = await bcrypt.compare (password, userLogin.password);

      if (!isMatch) {
        return res.status (400).json ({error: 'Invalid Credentials'});
      } else {
        const token = await userLogin.generateAuthToken ();

        res.cookie ('jwtoken', token, {
          expires: new Date (Date.now () + 25892000000),
          httpOnly: true,
        });
        return res.status (200).json ({message: 'User Login Successfully'});
      }
    }
  } catch (error) {
    console.log (error);
  }
});

router.post ('https://portfolio-mjax.onrender.com/contact', async (req, res) => {
  try {
    const {name, email, phone, message} = req.body;

    const Querry = new Message ({name, email, phone, message});
    const saved = await Querry.save ();

    if (saved) {
      res.status (200).json ({message: 'success'});
    }
  } catch (err) {
    console.log (err);
  }
});

router.get ('/logout', (req, res) => {
  res.clearCookie ('jwtoken', {path: '/home'});
  res.status (200).send ('User Logout');
});

export default router;
