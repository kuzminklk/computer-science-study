
import express from 'express';
import { getAllEmployees, createNewEmpoyee, updateEmpoyee, deleteEmployee, getEmployee } from '../../controllers/employeesController.js';

const router = express.Router();

router.route('/')
    .get(getAllEmployees)
    .post(createNewEmpoyee)
    .put(updateEmpoyee)
    .delete(deleteEmployee)

router.route('/:id')
    .get(getEmployee)

export default router