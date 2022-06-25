const express = require('express');
const router = express.Router();

const { getAllItems, getItemById } = require('../controller/itemControllers')

//Get all items from db
//api/items
router.get('/', getAllItems)

//Get items from db by id
//api/items/:id
router.get('/:id', getItemById)

module.exports = router;
