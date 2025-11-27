
// Get, modify, delete employees data. Protected via JWT in server.js


import path from 'path';
import employeesJson from '../model/employees.json' with { type: 'json' };

const employeesDB = {
    employees: employeesJson,
    setEmployees(data) {
        this.employees = data;
    } 
};

function getAllEmployees(req, res) {
    return res.json(employeesDB.employees);
}

function createNewEmpoyee(req, res) {
    const newEmployee = {
        id: employeesDB.employees[employeesDB.employees.length - 1].id + 1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    if (!newEmployee.firstname || !newEmployee.lastname ) {
        return res.status(400).json({ message: 'First and last name are required'});
    }

    employeesDB.setEmployees([...employeesDB.employees, newEmployee]);
    return res.status(201).json(employeesDB.employees);
}

function updateEmpoyee(req, res) {
    const employee = employeesDB.employees.find( emp => emp.id === parseInt(req.body.id));
    if (!employee) {
          return res.status(400).json({ message: `Employee ID: ${req.body.id} not found`});
    }
    if (req.body.firstname) {
        employee.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
        employee.lastname = req.body.lastname;
    }
    const filteredArray = employeesDB.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee];
    employeesDB.setEmployees(unsortedArray.sort( (a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    return res.json(employeesDB.employees)

}

function deleteEmployee(req, res) {
    const employee = employeesDB.employees.find( emp => emp.id === parseInt(req.body.id));
    if (!employee) {
          return res.status(400).json({ message: `Employee ID: ${req.body.id} not found`});
    }
    const filteredArray = employeesDB.employees.filter(emp => emp.id !== parseInt(req.body.id));
    employeesDB.setEmployees(filteredArray);
    return res.json(employeesDB.employees)
}

function getEmployee(req, res) {
    const employee = employeesDB.employees.find( emp => emp.id === parseInt(req.params.id));
    if (!employee) {
          return res.status(400).json({ message: `Employee ID: ${req.params.id} not found`});
    }
    return res.json(employee)
}

export { getAllEmployees, createNewEmpoyee, updateEmpoyee, deleteEmployee, getEmployee }