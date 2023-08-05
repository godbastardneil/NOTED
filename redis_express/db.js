import Sequelize from 'sequelize';

export default new Sequelize(
    process.env.POSTGRES_NAME, // Название БД
    process.env.POSTGRES_USER, // Пользователь
    process.env.POSTGRES_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT
    }
)