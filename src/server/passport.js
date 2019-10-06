const passport = require("passport");
const {
  Strategy,
  ExtractJwt
} = require("passport-jwt");
const models = require("./models");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    console.log(payload.id)
  } catch (error) {
    return done(error, false)
  }

};

exports.authenticateJwt = (req, res, next) => passport.authenticate("jwt", {
  sessions: false
}, (error, user) => {
  // console.log(req.headers)
  if (user) {
    req.user = user
  }
  next();
})(req, res, next);
passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();