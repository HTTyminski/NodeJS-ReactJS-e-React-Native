const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();


//routes.get('/', (req, res) => {
//    return res.json({ message: `Olá ${req.query.name}` });
//});

//post é criar
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
//(req, res) => {
//return res.json(req.body);
//});

module.exports = routes;
