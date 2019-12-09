const passport = require("passport");
const {
  User
} = require("./models");
const {
  Strategy,
  ExtractJwt
} = require("passport-jwt");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    //payload:{email,iat=>토큰이 발급 된 시간}
    const {
      dataValues
    } = await User.findOne({
      where: {
        email: payload.email
      }
    });
    // console.log('user:', dataValues);
    return done(null, dataValues)
  } catch (error) {
    return done(error, false)
  }

};

exports.authenticateJwt = (req, res, next) => passport.authenticate("jwt", {
  sessions: false
}, (error, user) => {
  // console.log('user:', user);
  // console.log(req.headers)
  if (user) {
    req.user = user
  }
  next();
})(req, res, next);
passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();