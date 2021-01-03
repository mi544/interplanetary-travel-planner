module.exports = function (sequelize, DataTypes) {
  const Planet = sequelize.define('Planet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    distance: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Planet.associate = function (models) {
    Planet.hasMany(models.Flight, {
      onDelete: 'cascade'
    })

    Planet.hasMany(models.FlightInProgress, {
      onDelete: 'cascade'
    })
  }

  return Planet
}
