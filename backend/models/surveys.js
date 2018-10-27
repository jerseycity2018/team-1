module.exports = (sequelize, DataTypes) => {
  var Surveys = sequelize.define('Surveys', {
    zipcode: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    country: DataTypes.TEXT,
    aloneOrGroup: DataTypes.TEXT,
    people: DataTypes.INTEGER,
    location: DataTypes.TEXT,
    duration: DataTypes.TEXT,
    transportation: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    ethnicity: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    activities: DataTypes.TEXT,
    weather: DataTypes.TEXT,
  });

  return Surveys;
};
