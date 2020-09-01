module.exports = function (sequelize, DataTypes) {
  const Amenity = sequelize.define("Amenity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Amenity.associate = function (models) {

    Amenity.belongsToMany(models.Flight, {
      through: "FlightsAmenities"
    });

    Amenity.belongsToMany(models.FlightInProgress, {
      through: "FlightsInProgressAmenities"
    });

    // Amenity.belongsToMany(models.Rocket, {
    //   through: "RocketAmenities"
    // });
  };

  return Amenity;
};