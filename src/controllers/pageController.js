const {createMenuObject} = require('../helpers/createMenuObject')

const {pet} = require('../models/pet')


const home = (req,res) =>{
    let list = pet.getAll()

    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner: {
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    })
}
const dogs = (req,res) =>{
    let list = pet.getFromType('dog')
    res.render('pages/pages',{
        menu:createMenuObject('dog'),
        banner: {
            title:'Todos os cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}
const cats = (req,res) =>{
    let list = pet.getFromType('cat')

    res.render('pages/pages',{
        menu:createMenuObject('cat'),
        banner:{
            title:'Todos os gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
const fishes = (req,res) =>{
    let list = pet.getFromType('fish')
    res.render('pages/pages',{
        menu:createMenuObject('fish'),
        banner:{
            title:'Todos os peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}

module.exports.home = home
module.exports.dogs = dogs
module.exports.cats = cats
module.exports.fishes = fishes