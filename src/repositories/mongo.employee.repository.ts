import { EmployeeModel } from "../model/employee.model.js";
import { CreateEmployeeDto, IEmployee } from "../types/empleyee.type.js";
import { IEmployeeRepository } from "./employee.repository.interface.js";

export class MongoEmployeeRepository implements IEmployeeRepository {
    async create(data: CreateEmployeeDto & { finalSalary: number; }): Promise<IEmployee> {
        const newEmployee = await EmployeeModel.create(data);
        return newEmployee.toObject();
    }

    async findAll(): Promise<IEmployee[]> {
        return EmployeeModel.find().sort({ createdAt: -1 }).exec();
    }

    async findById(_id: string): Promise<IEmployee | null> {
        return EmployeeModel.findById(_id).lean().exec(); //lean para texto plano
    }
}

//las consultas de moongose son querys, no exactamente promesas nativas, con exec se transforman a promesas estandar