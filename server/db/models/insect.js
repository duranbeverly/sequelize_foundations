'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        titleCase(value) {
          if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
            throw new Error('Must be title case.')
          }
        }
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 240]
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
