module.exports = (sequelize, DataType) => {

  const UserLocation = sequelize.define('UserLocation', {
    street: {
      type: DataType.STRING,
    },          
    neighborhood: {
      type: DataType.STRING,        
    },          
    town: {
      type: DataType.STRING,        
    },              
  });

  UserLocation.associate = (models) => { 
    UserLocation.belongsTo(models.User)     
    UserLocation.belongsTo(models.City)     
  };

  return UserLocation;
};