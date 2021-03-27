module.exports = app => {    
  const ROUTES = app.const.routes
  const model = app.db.models.City;  
  
  app.get(ROUTES.CITIES, (req, res) => {    
    model.findAll({})
    .then(result => {        
      res.json(result)
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    });     
        
  });

  app.get(ROUTES.CITY, (req, res) => {    
    model.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(result => {        
      res.json(result)
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    });     
  });

  app.post(ROUTES.CITIES, (req, res) => {

    model.create(req.body)
    .then(result => {        
      res.status(201).json(result)
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    });     
  });

  app.patch(ROUTES.CITY, (req, res) => {

    model.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {        
      result.update(req.body)
      .then(()=>{
        res.status(204).send()
      })
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    });     
  });

  app.delete(ROUTES.CITY, (req, res) => {

    model.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {        
      result.destroy();      
      res.status(204).send()      
    })
    .catch(error => {
      res.status(500).json({error: error.message});
    });     
  });
  
};