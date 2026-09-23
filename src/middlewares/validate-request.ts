import { Request, Response, NextFunction } from 'express';

export const validateCreateEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, position, baseSalary, yearsOfService } = req.body;

  if (!name || !position) {
    return res.status(400).json({ message: 'Nombre y puesto son obligatorios' });
  }

  if (typeof baseSalary !== 'number' || baseSalary <= 0) {
    return res.status(400).json({ message: 'El salario base debe ser mayor a 0' });
  }

  if (
    typeof yearsOfService !== 'number' ||
    yearsOfService < 0 ||
    !Number.isInteger(yearsOfService)
  ) {
    return res.status(400).json({
      message: 'La antigüedad debe ser un entero mayor o igual a 0'
    });
  }

  return next();
};