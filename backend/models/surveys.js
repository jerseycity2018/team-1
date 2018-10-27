module.exports = (sequelize, DataTypes) => {
  var Surveys = sequelize.define('Surveys', {
    zipcode: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    country: DataTypes.TEXT,
    aloneOrGroup: DataTypes.TEXT,
    group: DataTypes.INTEGER,
    places: DataTypes.ARRAY(DataTypes.TEXT),
    duration: DataTypes.TEXT,
    transportation: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    ethnicity: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    activity: DataTypes.TEXT,
    weather: DataTypes.TEXT,
    hour: DataTypes.INTEGER
  });

  return Surveys;
};
