import express from 'express';
import path from 'path';

import employees from '../../../model/employees.json' with { type: 'json' };

const router = express.Router();
const data = {};
data.employees = employees;

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json( {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname
        })
    })
    .put((req, res) => {
        res.json( {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname
        })
    })
    .delete((req, res) => {
        res.json( {
            'fisrtname': req.body.firstname,
            'lastname': req.body.lastname
        })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({
            "id": req.params.id
        })
    })

export default router