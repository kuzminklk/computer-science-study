
import express from 'express';
import path from 'path';

const router = express.Router();

const SUBDIRPATH = path.join(import.meta.dirname, '..', '..', 'views', 'subdir')

router.get(/^\/$|\/index(.html)?/, (req, res) => {
    res.sendFile(path.join(SUBDIRPATH, 'index.html'));
})

router.get(/\/test(.html)?/, (req, res) => {
    res.sendFile(path.join(SUBDIRPATH, 'test.html'));
})

export default router;