import jwt from "jsonwebtoken";
const JWT_SECRET = "Someone";

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
}
