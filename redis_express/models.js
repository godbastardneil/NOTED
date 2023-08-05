import DataTypes from 'sequelize';
import bcrypt from 'bcrypt';

import sequelize from './db.js';


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    name: {type: DataTypes.STRING(15), allowNull: false},
    role: {type: DataTypes.STRING(5), defaultValue: "user"},
    password: {
        type: DataTypes.STRING,
        get(password) {
            let comparePassword = bcrypt.compareSync(password, this.getDataValue('password'));
            return comparePassword;
        },
        async set(password) {
            const hashPassword = await bcrypt.hash(password, 5);
            this.setDataValue('password', hashPassword)
        }
    }
}, {freezeTableName: true});
const Note = sequelize.define('note', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING(15), allowNull: false},
    text: {type: DataTypes.TEXT},
}, {freezeTableName: true});

User.hasMany(Note);
Note.belongsTo(User);

export default { User, Note }