module.exports = (sequelize, DataType) => {

  const City = sequelize.define('City', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },              
  });

  City.associate = (models) => {         
    City.belongsTo(models.Country)     
  };

  return City;

};