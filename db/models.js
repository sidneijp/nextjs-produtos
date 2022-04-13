import { Sequelize } from 'sequelize'
import db from "."

const Categoria = db.define("categorias", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

const Produto = db.define("produtos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estoque: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.INTEGER,
    references: {
      model: Categoria,
      key: 'id',
    }
  },
}, {
  timestamps: false,
});


db.sync()

export {Produto, Categoria}