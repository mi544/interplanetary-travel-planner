module.exports = function (sequelize, DataTypes) {
  const launchSite = sequelize.define('launchSite', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // location: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    operatedBy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return launchSite
}
