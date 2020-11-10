import { Router } from 'express';

import sessionsRouter from './sessions.routes';
import appoitmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appoitmentsRouter);
routes.use('/users', usersRouter);

export default routes;
