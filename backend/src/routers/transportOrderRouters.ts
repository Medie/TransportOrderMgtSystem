import {Router} from 'express';
import { createTransportOrderHandler, getTransportOrderStateHandler, listTransportOrdersHandler } from '../controllers/transportOrderController';

const  router = Router();

router.post('/api/create', createTransportOrderHandler);
router.get('/api/orders/:id/state', getTransportOrderStateHandler);
router.get('/api/orders', listTransportOrdersHandler)

export default router;



