module.exports = function (sequelize, DataTypes) {
  const siteOperator = sequelize.define('siteOperator', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return siteOperator
}
