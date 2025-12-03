
import express from 'express';
import { getAllEmployees, createNewEmpoyee, updateEmpoyee, deleteEmployee, getEmployee } from '../../controllers/employees.js';
import ROLES_LIST from '../../config/roles-list.js';
import verifyRoles from '../../middleware/verifyRoles.js';

const router = express.Router();

router.route('/')
    .get(getAllEmployees)
    .post(verifyRoles(ROLES_LIST.admin, ROLES_LIST.editor), createNewEmpoyee)
    .put(verifyRoles(ROLES_LIST.admin, ROLES_LIST.editor), updateEmpoyee)
    .delete(verifyRoles(ROLES_LIST.admin), deleteEmployee);

router.route('/:id')
    .get(getEmployee);

export default router