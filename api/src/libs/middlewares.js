import express from 'express';
import cors from 'cors'

module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3001);
  app.set('json spaces', 4);

  // middlewares
  app.use(cors());
  app.use(express.json());  
};