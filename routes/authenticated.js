const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(500).json({ message: 'Pedido negado' });
};

module.exports = ensureAuthenticated;
