
// Get, modify, delete employees data. Protected via JWT in server.js


import Employee from "../model/Employee.js";


async function getAllEmployees(req, res) {
    const employees = await Employee.find();
    if (!employees) {
        return res.status(204).json({'message': 'No employees found'})
    }
    return res.json(employees);
}

async function createNewEmpoyee(req, res) {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last name are required'});
    }
    try {
        const result = await Employee.create({
            'firstname':req.body.firstname,
            'lastname':req.body.lastname,
        });
        return res.status(201).json(result); // HTTP 201 — Created
    } catch (error) {
        req.status(500).json({ 'message': 'DB error.'});
        console.error(error);
    }
}

function updateEmpoyee(req, res) {

    if (!req?.body?.id) {
          return res.status(400).json({ 'message': 'Employee ID is required'});
    }

    const employee = Employee.findOne({'_id':req.body.id}).exec();

    if (!employee) {
          return res.status(204).json({ 'message': `No employee matches ID: ${req.body.id}`});
    }

    if (req.body?.firstname) {
        employee.firstname = req.body.firstname;
    }
    if (req.body?.lastname) {
        employee.lastname = req.body.lastname;
    }

    const result = employee.save();

    return res.json(result)

}

async function deleteEmployee(req, res) {
    if (!req?.body?.id) {
          return res.status(400).json({ message: 'Employee ID is required'});
    }

    const employee = Employee.findOne({'_id':req.body.id}).exec();

    if (!employee) {
          return res.status(204).json({ 'message': `No employee matches ID: ${req.body.id}`});
    }

    const result = Employee.deleteOne({'_id':req.body.id});

    return res.json(result)
}

async function getEmployee(req, res) {
    if (!req?.params?.id) {
        return res.status(400).json({ message: 'Employee ID is required'});
    }

    const employee = await Employee.findOne({'_id': req.params.id}).exec();
    if (!employee) {
        return res.status(204).json({ 'message': `No employee matches ID: ${req.body.id}`});
    }   

    return res.json(employee)
}

export { getAllEmployees, createNewEmpoyee, updateEmpoyee, deleteEmployee, getEmployee }