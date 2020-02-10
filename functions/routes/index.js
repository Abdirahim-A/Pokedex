var express = require('express');
var router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const cors = require('cors')({origin: true});

/* GET home page. */
router.get('/allPokemon.json', function(req, res, next) {
  cors(req, res, () => {
  var interval = {
    limit:26,
  }
  P.getPokemonsList(interval)
    .then(function(response) {
      res.send(response)
      return null
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  });
});


router.get('/pokemon/:index', (req, res) => {
  cors(req, res, () => {
     P.getPokemonByName(req.params.index)
     .then(function(response) {
      res.send(response)
      return null
     })
     .catch(function(error) {
       console.log('There was an ERROR: ', error);
     });
    });
});

router.get('/pokemon/:name/pokemon-species', (req, res) => {
  cors(req, res, () => {

  P.getPokemonByName(req.params.name)
  .then(function(response) {
    cors(req, res, () => {
   P.getPokemonSpeciesByName(response.name)
   .then(function(species) {
     res.send(species)
     return null
   })
   .catch(function(error) {
     console.log('There was an ERROR: ', error);
   });
  });
  return null
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
  
});
});


router.get('/pokemon/:pokeIndex/pokemon-des', (req, res) => {
  cors(req, res, () => {
  P.getPokemonByName(req.params.pokeIndex)
  .then(function(response) {
    cors(req, res, () => {
   P.getPokemonSpeciesByName(response.name)
   .then(function(species) {
     const a = species.flavor_text_entries
     res.send(a.filter(function(item){
      return item.language.name === "en";         
    }));
    return null
   })
   .catch(function(error) {
     console.log('There was an ERROR: ', error);
   });
  });
  return null
  })

  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
});

});

router.get('/pokemon/:index/pokemon-evolve', (req, res) => {
  cors(req, res, () => {
  P.getEvolutionChainById(req.params.index)
  .then(function(response) {
    res.send(response)
    return null
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
});
});


module.exports = router;
