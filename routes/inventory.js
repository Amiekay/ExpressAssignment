const express = require('express');

const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
// Create an item
router.post('/items',  inventoryController.createItem);

// Get all items
router.get('/items', inventoryController.getAllItems);

// Get one item by ID
router.get(
  '/items/:id',
  inventoryController.validateItem,
  inventoryController.getOneItem,
);

// Update an item by ID
router.put(
  '/items/:id',
  inventoryController.validateItem,
  inventoryController.updateItem,
);

// Delete an item by ID
router.delete(
  '/items/:id',
  inventoryController.validateItem,
  inventoryController.deleteItem,
);

module.exports = router;
