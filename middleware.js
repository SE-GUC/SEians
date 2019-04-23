const jwt = require('jsonwebtoken');
const tokenKey = require('./config/keys').secretOrKey;

const withAuth = function(req, res, next) {
  const token = req.headers['x-access-token'];
  console.log(token);
  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  } else {
    return jwt.verify(token, tokenKey, function(err, decoded) {
      if (err) {
        console.log(err);
        return res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        return next();
      }
    });
  }
}

module.exports = withAuth;