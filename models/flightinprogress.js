module.exports = function (sequelize, DataTypes) {
  const FlightInProgress = sequelize.define("FlightInProgress", {
    arrivalTimeEst: {
      type: DataTypes.DATE,
    },
    totalCost: {
      type: DataTypes.BIGINT,
    },
    flightNumber: {
      type: DataTypes.STRING,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    amenitiesFinalized: {
      type: DataTypes.BOOLEAN,
    }
  });

  FlightInProgress.associate = function (models) {

    FlightInProgress.belongsToMany(models.Amenity, {
      through: "FlightsAmenities"

    });

    FlightInProgress.belongsTo(models.Planet, {
      foreignKey: {}
    });

    FlightInProgress.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    FlightInProgress.belongsTo(models.Rocket, {
      foreignKey: {}
    });
  };

  return FlightInProgress;
};