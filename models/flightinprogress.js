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

    FlightInProgress.belongsTo(models.Amenity, {
      foreignKey: {}
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