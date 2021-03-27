module.exports = (sequelize, DataType) => {

    const UserData = sequelize.define('UserData', {
      name: {
        type: DataType.STRING,
      },          
      lastName: {
        type: DataType.STRING,        
      },          
      curp: {
        type: DataType.STRING,        
      },          
      rfc: {
        type: DataType.STRING,        
      },
      genre: {
        type: DataType.STRING
      },
    });
  
    UserData.associate = (models) => { 
      UserData.belongsTo(models.User)     
      UserData.belongsTo(models.Country,{
        foreignKey: 'bornCountryId'
      })     
    };
  
    return UserData;
};