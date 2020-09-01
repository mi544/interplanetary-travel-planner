module.exports = function (sequelize, DataTypes) {
  const Flight = sequelize.define("Flight", {
    arrivalTimeEst: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Flight.associate = function (models) {

    Flight.belongsTo(models.Amenity, {
      foreignKey: {
        allowNull: false
      }
    });

    Flight.belongsTo(models.Planet, {
      foreignKey: {
        allowNull: false
      }
    });

    Flight.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Flight.belongsTo(models.Rocket, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Flight;
};