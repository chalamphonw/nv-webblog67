const { Shoes } = require('../models');

module.exports = {
    // get all cap
    async index(req, res) {
        try {
            const shoe = await Shoes.findAll()
            res.send(shoe)
        } catch (err) {
            res.status(500).send({
                error: 'The shoes information was incorrect'
            })
        }
    },
    // create cap
    async create(req, res) {
        // res.send(JSON.stringify(req.body))
        try {
            console.log('Shoe create req.body:',req.body)
            const shoe = await Shoes.create(req.body)
            console.log('shoe create shoe:',shoe)
            res.send(shoe.toJSON())
        } catch (err) {
            console.log('Shoe create err:',err)
            res.status(500).send({
                error: 'Create shoe incorrect'
            })
        }
    },
    // edit shoe, suspend, active
    async put(req, res) {
        try {
            await Shoes.update(req.body, {
                where: {
                    id: req.params.shoeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update shoe incorrect'
            })
        }
    },
    // delete cap
    async remove(req, res) {
        try {
            const shoe = await Shoes.findOne({
                where: {
                    id: req.params.shoeId
                }
            })
            if (!shoe) {
                return res.status(403).send({
                    error: 'The shoe information was incorrect'
                })
            }
            await shoe.destroy()
            res.send(shoe)
        } catch (err) {
            res.status(500).send({
                error: 'The shoe information was incorrect'
            })
        }
    },
    // get cap by id
    async show(req, res) {
        try {
            const shoe = await Shoes.findByPk(req.params.shoeId)
            res.send(shoe)
        } catch (err) {
            req.status(500).send({
                error: 'The shoe information was incorrect'
            })
        }
    }
}