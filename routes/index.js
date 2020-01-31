var express = require('express');
var _ = require('underscore');
var router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

/* GET home page. */
router.get('/allPokemon.json', function(req, res, next) {
  var interval = {
    limit:26,
  }
  P.getPokemonsList(interval)
    .then(function(response) {
      res.send(response)
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
});

router.get('/pokemon/:index', (req, res) => {

     P.getPokemonByName(req.params.index)
     .then(function(response) {
      res.send(response)
     })
     .catch(function(error) {
       console.log('There was an ERROR: ', error);
     });


});

router.get('/pokemon/:name/pokemon-species', (req, res) => {

  P.getPokemonByName(req.params.name)
  .then(function(response) {

   P.getPokemonSpeciesByName(response.name)
   .then(function(species) {
     res.send(species)
   })
   .catch(function(error) {
     console.log('There was an ERROR: ', error);
   });
  })

  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
  

});


router.get('/pokemon/:pokeIndex/pokemon-des', (req, res) => {

  P.getPokemonByName(req.params.pokeIndex)
  .then(function(response) {

   P.getPokemonSpeciesByName(response.name)
   .then(function(species) {
     const a = species.flavor_text_entries
     res.send(a.filter(function(item){
      return item.language.name == "en";         
    }));
   })
   .catch(function(error) {
     console.log('There was an ERROR: ', error);
   });
  })

  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
  

});

router.get('/pokemon/:index/pokemon-evolve', (req, res) => {

  P.getEvolutionChainById(req.params.index)
  .then(function(response) {
    res.send(response)
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });

});


module.exports = router;
