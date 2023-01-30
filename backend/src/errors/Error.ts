import { Request, Response, NextFunction } from 'express';

export class Error {
  public static handler(
    error: { status: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { status = 500, message = 'Something went wrong!' } = error;
    res.status(status).json({ error: message });
  }

  public static asyncErrorBoundary(delegate: any, defaultStatus = 500) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve()
        .then(() => delegate(req, res, next))
        .catch((error = {}) => {
          const { status = defaultStatus, message = error } = error;
          next({
            status,
            message,
          });
        });
    };
  }

  public static methodNotAllowed(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    return next({
      status: 405,
      message: `${req.method} not allowed for ${req.originalUrl}`,
    });
  }

  public static notFound(req: Request, res: Response, next: NextFunction) {
    return next({ status: 404, message: `Path not found: ${req.originalUrl}` });
  }
}
