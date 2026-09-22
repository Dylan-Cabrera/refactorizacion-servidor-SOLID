export interface IEmployee {
    _id?: string;
    name: string;
    position: string;
    baseSalary: number;
    yearsOfService: number
    finalSalary: number
    createAt?: Date;
    updateAt?: Date
}

//data transfer objet, para la creacion de nuevo empleado. Si el body recibe algo mas que esto lo va a ignorar
export interface CreateEmployeeDto {
    name: string;
    position: string;
    baseSalary: number;
    yearsOfService: number
}