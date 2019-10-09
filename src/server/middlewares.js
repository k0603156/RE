module.exports.isAuthenticated = (req, res, next) => {
  if (!req.user) {
    throw Error("You need to log in to perform this action");
  } else {
    next();
  }
  return;
};