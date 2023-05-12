const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers/RequestError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(RequestError(400, `${id} is not valid Id`));
  }
  next();
};


module.exports = isValidId;