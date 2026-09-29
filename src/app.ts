import express, { Express } from "express"
import { MongoEmployeeRepository } from "./repositories/mongo.employee.repository.js";
import { EmployeeService } from "./services/employee.service.js";
import { EmployeeController } from "./controllers/employee.controller.js";
import { createEmployeeRouter } from "./routes/employee.routes.js";
import { errorHandler } from "./middlewares/error-handler.js";

export const app = () => {
    const app = express();

    app.use(express.json());

    const employeeRepository = new MongoEmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);
    const employeeController = new EmployeeController(employeeService);

    const employeeRouter = createEmployeeRouter(employeeController);

    app.use("/employees", employeeRouter);
    app.use(errorHandler);
    
    return app
}