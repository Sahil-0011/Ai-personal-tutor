  import jwt from 'jsonwebtoken';
interface  JwtPayload {
    email: string;
    id: string;

} 

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

export const generateToken = (payload: JwtPayload): string => {
  const options: jwt.SignOptions = {
    expiresIn: JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  };
  return jwt.sign(payload, JWT_SECRET, options);
};