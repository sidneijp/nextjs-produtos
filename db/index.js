import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres://produtos_user:produtos_password@localhost:5432/produtos_database')

export default db
