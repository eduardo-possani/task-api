const tasks = require('../models/taskModel.js');

const list = async (req, res) => {
    try {
        const task = await tasks.findAll();
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

const store = async (req, res) => {
    try {
        const task = await tasks.create({...req.body})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { list , store }