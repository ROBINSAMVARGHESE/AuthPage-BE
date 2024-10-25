// Middlewares/AuthMiddleware.js
const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Assuming the token contains user info
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};
