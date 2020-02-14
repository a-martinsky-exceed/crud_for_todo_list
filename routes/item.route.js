const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/item.controller');
router.get('/:id', item_controller.read);
router.post('/create', item_controller.create);
router.put('/:id/update', item_controller.update);
router.delete('/:id/delete', item_controller.delete);

module.exports = router;
