import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models.js';
import ApiError from '../error/ApiError.js';

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, name, password} = req.body;
        if (!email || !password || !name) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        
        const user = await User.create({email, name, password: password});

        return res.json(generateJwt(user.id, user.email));
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        
        if (!user.password(password)) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        
        return res.json(generateJwt(user.id, user.email));
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }
}

export default new UserController()