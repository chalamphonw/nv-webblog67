module.exports = (sequelize, DataTypes) => {
    const Shoes = sequelize.define('Shoes', {
        shoeType : DataTypes.STRING,
        shoeSize  : DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.TEXT,
        material : DataTypes.TEXT,
    })
    return Shoes
}

