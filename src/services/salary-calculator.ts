export interface ISalaryCalculator {
    CalculateFinalSalary(baseSalary: number, yearOfService: number): number;
}

export class SenioritySalaryCalculator implements ISalaryCalculator {
    private readonly bonusPerYear = 0.02;
    ;
    CalculateFinalSalary(baseSalary: number, yearOfService: number): number {
        const bonus = baseSalary * this.bonusPerYear * yearOfService;
        return baseSalary + bonus;
    }
}