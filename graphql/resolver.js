const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user')

module.exports = {
    createUser: async function({ userInput }, req) {
        const email = userInput.email
        const password = userInput.password

        const existingEmail = await User.findOne({ email: email })

        if (existingEmail) {
            const error = new Error('Email has been selected')
            throw error
        }

        const hashedPw = await bcrypt.hash(password, 12)

        const user = new User({
            email: email,
            password: hashedPw,
            cart: {items: []}
        })

        const createdUser = await user.save()

        return {
            createdUser,
            _id: createdUser._id.toString()
        }
    }
}
