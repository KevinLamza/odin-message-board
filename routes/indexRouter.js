import { Router } from 'express';

import messages from '../data/messages.js';

const indexRouter = Router();

indexRouter.get('/', (req, res) =>
    res.render('index', { title: 'Mini Message Board', messages: messages }),
);

export default indexRouter;
