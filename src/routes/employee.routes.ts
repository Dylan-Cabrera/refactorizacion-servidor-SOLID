import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";
import { validateCreateEmployee } from "../middlewares/validate-request.js";

export const createEmployeeRouter = (controller: EmployeeController): Router => {
    const router = Router();

    router.post("/", validateCreateEmployee, controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findById);

    return router
};