const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Queso',
    price: 7500,
    desc: 'Queso campesino'
  });
});

module.exports = router;
