const { validateRegister } = require('../middlewares/validationMiddleware');

const registerUser = (req, res) => {
  // Traitement de l'inscription de l'utilisateur
  res.status(200).json({ message: 'Inscription réussie' });
};

module.exports = { registerUser };
