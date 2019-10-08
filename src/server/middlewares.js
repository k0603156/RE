module.exports.isAuthenticated = (req, res, next) => {
  console.log('isAuthenticated');
  next();
  if (!req.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};