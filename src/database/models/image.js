'use strict';
const { Model } = require('sequelize');
const sequelize = require("../../config/db.config");

class Image extends Model {
    static associate(models) {
        // const PackageImage = require("../PackageImage")(sequelize, DataTypes);
        // Image.hasOne(PackageImage, { as: "commented_by", foreignKey: "image_id", targetKey: "id" });
        this.hasOne(models.PackageImage, { foreignKey: 'image_id', as: 'package_images' });
        models.PackageImage.belongsTo(this, { foreignKey: 'image_id', as: 'image' });
    }
}

Image.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    path: {
      type:  DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'Image',
});

module.exports = Image;
