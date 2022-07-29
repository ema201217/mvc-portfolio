module.exports = {
  intro: (req, res) => res.render('intro'),
  portfolio: (req, res) => res.render('portfolio'),

  portfolioDetail: (req, res) => {
    const dbProducts = require('../db.json')
    // console.log(dbProducts)
    const idDesdeFront = req.params.id
    const productFind = dbProducts.find(product=> product.id === +idDesdeFront)
    res.send(productFind)
  },

  about: (req, res) => res.render('about'),
  contact: (req, res) => res.render('contact')
}