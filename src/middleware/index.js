import jwt from 'jsonwebtoken';

const config = require('../config.js');

const checkToken = (req, res, next) => {
 // let token = req.headers.authorization || req.headers['x-access-token']; // Express headers are auto converted to lowercase
 // if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.split(" ")[1];
  }

  if (token) {
    // eslint-disable-next-line consistent-return
const { id } = jwt.verify(token, config.secret);

    const { id } = jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        console.log("dfghjklyguhjkl");
        
        return res.status(401).json({
          status: 401,
          message: 'Token is not valid',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      success: 403,
      message: 'Auth token is not supplied',
    });
  }
};

export default checkToken;
