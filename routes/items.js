const express = require('express');
const router = express.Router();

let data = require('./data')

//GET all data
router.get('/', (req, res) => {
    res.status(200).json(data)
})

//GET a specific data item (person)
router.get('/:id', (req, res) => {
    //find a person by id
    let found = data.find(item => { return item.id === parseInt(req.params.id) })

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404)
    }
})

//POST - create a new person
router.post('/', (req, res) => {
    //get all item IDs
    let itemIDs = data.map(item => item.id)

    //create a new id
    let newId = itemIDs.length > 0 ? Math.max.apply(Math, itemIDs) + 1 : 1

    //create a new object for the new person (item)
    let newItem = {
        id: newId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }

    //push the new person (item) to the person (item) data array
    data.push(newItem)
})

//PUT - update a specific user
router.put('/:id', (req, res) => {
    let updatedItem = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }

    data.splice(5, 1, updatedItem)
    res.sendStatus(204)

})

//DELETE - delete a specific user
router.delete('/:id', (req, res) => {
    let found = data.find(item => {
        return item.id === parseInt(req.params.id)
    })

    if (found) {
        let targetIndex = data.indexOf(found)

        data.splice(targetIndex, 1)
    }

    res.sendStatus(204)
})

module.exports = router