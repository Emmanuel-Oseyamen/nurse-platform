export interface AuthUser {
  sub: string;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user: AuthUser;
    }
  }
}