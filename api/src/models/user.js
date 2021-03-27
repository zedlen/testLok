module.exports = (sequelize, DataType) => {

    const User = sequelize.define('User', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },          
      password: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },                
    });
  
    User.associate = (models) => { 
      User.hasOne(models.UserData)     
      User.hasOne(models.UserLocation)     
    };
  
    return User;
  
};