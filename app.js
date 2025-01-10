import express from 'express';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server up and running - listening on port ${PORT}`);
});

app.use('/', indexRouter);
app.use('/new', newRouter);
