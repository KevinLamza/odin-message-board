import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (req, res) => res.send('This is the "new" page!'));

export default newRouter;
