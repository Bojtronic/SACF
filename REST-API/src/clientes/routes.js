const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getClientes);
router.get("/:id", controller.getClienteById);

module.exports = router;