const params = process.env.DB_HOST ? {
  dialect: process.env.DB_DIALECT || 'sqlite',
  host: process.env.DB_HOST
} : {
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: 'users-db.sqlite',
  define: {
    underscored: true
  },
  operatorsAliases: false
};

module.exports = {
  database: process.env.DB_DATABASE || 'users',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  params: params,  
};