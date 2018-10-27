module.exports = (sequelize, DataTypes) => {
  var Surveys = sequelize.define('Surveys', {
    zipcode: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    country: DataTypes.TEXT,
    aloneOrGroup: DataTypes.TEXT,
    people: DataTypes.INTEGER,
    placeGone: DataTypes.TEXT,
    howLong: DataTypes.TEXT,
    howArrived: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    ethnicity: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    activities: DataTypes.TEXT
  });

  return Surveys;
};
