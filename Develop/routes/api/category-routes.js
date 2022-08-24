const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  }).then(data => {
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({where:{id:req.params.id},
    include: [{model: Product}]
  
  })
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(newCategory => {
    res.json(newCategory)
  })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {where:{id:req.params.id}}).then
  (newCategory => res.json(newCategory))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({where:{id:req.params.id}
    .then((newCategory) => res.send(err))
  })
});

module.exports = router;
