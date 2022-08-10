const {pet} = require('../models/pet')
const {createMenuObject} = require('../helpers/createMenuObject')

const search = (req,res) =>{
    let query = req.query.q
    let list = pet.getFromName(query)

    res.render('pages/pages',{
        list
    })
}
module.exports.search = search