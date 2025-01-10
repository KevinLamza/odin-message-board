import { Router } from 'express';

import messages from '../data/messages.js';

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('form', { title: 'Submit a new message' });
});
newRouter.post('/', (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date(),
    });
    res.redirect('/');
});

export default newRouter;
