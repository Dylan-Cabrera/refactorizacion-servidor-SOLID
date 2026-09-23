import { EmployeeService } from "../services/employee.service.js";
import { Response, Request, NextFunction } from "express";


export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {};

    create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const employee = await this.employeeService.createEmployee(req.body);
            return res.status(201).json(employee);
        } catch (error) {
            return next(error);
        }
    }

    findAll = async (_req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const employees = await this.employeeService.findAllEmployees();
            res.status(200).json(employees)           
        } catch (error) {
            return next(error);
        }
    }

    findById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const id = req.params.id as string;
            const employee = await this.employeeService.findEmployeeById(id);

            if(!employee) {
                return res.status(404).json({message: "Empleado no encontrado"})
            }
            return res.status(200).json(employee);
        } catch (error) {
            return next(error);
        }
    }
}

