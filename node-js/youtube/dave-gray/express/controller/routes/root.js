import express from 'express';
import path from 'path';

const router = express.Router();
const VIEWSPATH = path.join(import.meta.dirname, '..', '..', 'views');

// Routes
router.get(/^\/$|\/index(.html)?/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'index.html'));
})

router.get(/\/new-page(.html)?/, (req, res) => {
    res.sendFile(path.join(VIEWSPATH, 'new-page.html'));
})

router.get(/\/old-page(.html)?/, (req, res) => {
    res.redirect(301, path.join(VIEWSPATH, '/new-page.html'));
})

export default router