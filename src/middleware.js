import jwt from 'jsonwebtoken';
import { APP_SECRET } from './config';

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization; // Express headers are auto converted to lowercase
  if (token === undefined || token === null) {
    return res.status(400).json({
      status: 400,
      message: 'No token provided',
    });
  }

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    // eslint-disable-next-line consistent-return
    // const newToken = jwt.verify(token, APP_SECRET)
    jwt.verify(token, APP_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: 'Token is not valid',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).status(403).json({
      status: 403,
      message: 'Auth token is not supplied',
    });
  }
};

export default checkToken;
