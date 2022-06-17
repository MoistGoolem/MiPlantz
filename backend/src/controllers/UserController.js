import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js'
import { User } from '../database/models/UserModel.js'

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            })
            return
        }
    }
    res.status(401).send({ message: 'Invalid email of password' })
}

export const register = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12),
    })
    const createdUser = await user.save()
    res.send({
        _id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    })
}
