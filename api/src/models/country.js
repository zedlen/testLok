module.exports = (sequelize, DataType) => {

    const Country = sequelize.define('Country', {
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
      nationality_name: {
        type: DataType.STRING,        
      }
    });
  
    Country.associate = (models) => {          
      Country.hasMany(models.City)     
    };
  
    return Country;
  
};