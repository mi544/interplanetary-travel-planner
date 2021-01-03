module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Country.associate = function (models) {
    Country.hasMany(models.Company, {
      onDelete: 'cascade'
    })
  }
  return Country
}
