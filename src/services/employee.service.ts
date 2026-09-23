import { IEmployeeRepository } from "../repositories/employee.repository.interface.js";
import { CreateEmployeeDto, IEmployee } from "../types/empleyee.type.js";
import { ISalaryCalculator, SenioritySalaryCalculator } from "./salary-calculator.js";

export class EmployeeService {
    constructor(
        private readonly employeeRepository: IEmployeeRepository,
        private readonly salaryCalcularor: ISalaryCalculator = new SenioritySalaryCalculator()
    ) {}

    async createEmployee(dto: CreateEmployeeDto): Promise<IEmployee> {
        const finalSalary = this.salaryCalcularor.CalculateFinalSalary(
            dto.baseSalary,
            dto.yearsOfService
        );

        const employee = await this.employeeRepository.create({
            ...dto, //spread operator
            finalSalary
        });

        console.log(`Empleado creado: ${employee.name} \nSalario final: ${employee.finalSalary}`)
        return employee
    }

    async findAllEmployees(): Promise<IEmployee[]> {
        return this.employeeRepository.findAll()
    }

    async findEmployeeById(id: string): Promise<IEmployee | null> {
        return this.employeeRepository.findById(id);
    }
}
