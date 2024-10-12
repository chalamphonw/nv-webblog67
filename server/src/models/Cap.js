module.exports = (sequelize, DataTypes) => {
    const Cap = sequelize.define('Cap', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.TEXT,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,     
        status: DataTypes.STRING,
    })
    return Cap
}