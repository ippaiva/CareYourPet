const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated() || req.user) {
    return next();
  }
  res.status(400).json({ message: 'Pedido negado' });
};

module.exports = ensureAuthenticated;
