module.exports = function (sequelize, DataTypes) {
  const Rocket = sequelize.define('Rocket', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cruisingSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    launchCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Rocket.associate = function (models) {
    Rocket.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    })

    // Rocket.belongsToMany(models.Amenity, {
    //   through: "rocketAmenities"
    // });

    Rocket.hasMany(models.Flight, {
      onDelete: 'cascade'
    })

    Rocket.hasMany(models.FlightInProgress, {
      onDelete: 'cascade'
    })
  }

  return Rocket
}
