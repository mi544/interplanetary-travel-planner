module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Company.associate = function (models) {
    Company.hasMany(models.Rocket)

    Company.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Company
}
