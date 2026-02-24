import jwt from "jsonwebtoken";
const SECRET = "mysecretkey";
export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "Not authorized" });
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
export const authorize = (...roles) => {
  return async (req, res, next) => {
    const user = await User.findById(req.user);
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }
    next();
  };
};