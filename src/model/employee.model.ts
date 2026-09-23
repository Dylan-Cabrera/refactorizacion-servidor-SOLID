import { Schema, model } from "mongoose";
import { IEmployee } from "../types/employee.type.js";

const empleyeeSchema = new Schema<IEmployee>(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        baseSalary: { type: Number, required: true },
        yearsOfService: { type: Number, required: true },
        finalSalary: { type: Number, required: true }
    },
    { timestamps: true }
)

export const EmployeeModel = model<IEmployee>("Employee", empleyeeSchema);