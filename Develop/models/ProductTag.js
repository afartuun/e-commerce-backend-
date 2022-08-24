const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    tagId: {
      type:DataTypes.INTEGER,
      references:{model:'tag', key:'id'}
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
