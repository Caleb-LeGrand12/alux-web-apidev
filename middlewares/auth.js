import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization.split("")[1];
    jwt.sign(token, process.env.AUTH_KEY);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "failed",
      message: "Authentication Failed: Incorrect Auth Token.",
    });
  }
}
