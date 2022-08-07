//criando as rotas
const express = require('express')
//puxando funções de rota do express
const router = express.Router()

// router.get('/',(req,res) =>{
//     res.send("Olá Mundo")
// })

module.exports = router

//importando 
const pageController = require('../controllers/pageController')
const searchController = require('../controllers/searchController')

//rotas
router.get('/',pageController.home)
router.get('/dogs',pageController.dogs)
router.get('/cats',pageController.cats)
router.get('/peixes',pageController.peixes)