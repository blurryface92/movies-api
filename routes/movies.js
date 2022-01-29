const route = require('express').Router();	
const Movies = require('../models/Movies.js');

route.get('/', (req, res) => {
    Movies.find()
        .then(movies => {
            res.json(movies);
            
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
);

route.get('/:rating', (req, res) => {
    Movies.find({ rating: req.params.rating })
        .then(movies => {
            res.json(movies);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}   
);

route.get('/:genre', (req, res) => {
    Movies.find({ genre: req.params.genre })
        .then(movies => {
            res.json(movies);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
);

route.get('/top',(req,res) => {
    Movies.find()
        .sort({rating: -1})
        .then(movies => {
            res.json(movies);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    
});
route.get('/:user',(req,res) => {
    Movies.find({user: req.params.user})
        .then(movies => {
            res.json(movies);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    
});

route.post('/', (req, res) => {
    const newMovie = new Movies(req.body);
    newMovie.save()
        .then(movie => {
            res.json(movie);
            res.status(200).json({
                message: 'Movie added successfully'
            }); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});
route.delete('/:id', (req, res) => {
    Movies.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(200).json({
                message: 'Movie deleted successfully'
            }); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});
route.delete('/:user/:title', (req, res) => {
    Movies.findOneAndRemove({user: req.params.user, title: req.params.title})
        .then(() => {
            res.json({ message: 'Movie deleted' });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

