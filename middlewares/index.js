const {validateBody, validateFavoriteBody} = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");

module.exports = {
  validateFavoriteBody,
  validateBody,
  isValidId, 
  authenticate
};
