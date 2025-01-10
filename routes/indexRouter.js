import { Router } from 'express';

const indexRouter = Router();

const messages = [
    {
        text: 'Moin moin, ihr Halunken!',
        user: 'EloTriX',
        added: new Date(),
    },
    {
        text: 'Das Haus zahlt sich nicht von alleine',
        user: 'MontanaBlack88',
        added: new Date(),
    },
    {
        text: 'Ist das krass',
        user: 'Papaplatte',
        added: new Date(),
    },
];

indexRouter.get('/', (req, res) =>
    res.render('index', { title: 'Mini Message Board', messages: messages }),
);

export default indexRouter;
