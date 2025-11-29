import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: 'exemplo_vo9t',
            host: 'dpg-d4l3q1u3jp1c7395m36g-a',
            username: 'exemplo_vo9t_user',
            password: 'riBoGTJJVJO8L6mt9nTG1NTr7AKI24NI',
            dialect: 'postgres'
        })
    }
}

export default new Database()