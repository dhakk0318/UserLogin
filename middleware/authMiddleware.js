const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.accessToken; // Get the access token from cookies

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attaching user info to request object
    
    next();  // Proceed to the next middleware or controller function
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.', error });
  }
};

module.exports = verifyToken;
