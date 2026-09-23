import { IEmployee, CreateEmployeeDto } from "../types/employee.type.js"

export interface IEmployeeRepository {
    create(data: CreateEmployeeDto & { finalSalary: number}): Promise<IEmployee>;
    findAll(): Promise<IEmployee[]>;
    findById(_id: string): Promise<IEmployee | null>;
}

//repositorio se encarga de ejecutar los comandos de la base de datos