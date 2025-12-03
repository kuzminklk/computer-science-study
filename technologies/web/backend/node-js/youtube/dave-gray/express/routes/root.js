import express from 'express';
import path from 'path';

const router = express.Router();
const VIEWSPATH = path.join(import.meta.dirname, '..', 'views');

router.get(/^\/$|\/index(.html)?/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'index.html'));
})

export default router