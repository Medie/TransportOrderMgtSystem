
import {Request, Response, NextFunction} from 'express';
import { createTransportOrder, getTransportOrderState, serializeTransportOrder, listTransportOrders  } from '../services/transportOrderService';


export const createTransportOrderHandler =  (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOrder = createTransportOrder(req.body);
        if(newOrder) {
            console.log('newOrder created' , serializeTransportOrder(newOrder));
            return res.status(201).send(serializeTransportOrder(newOrder));
        } else {
            return res.status(500).send('An error occurred while creating the transport order');
        }

    }catch (error: string | any) {
        console.error('Error creating transport order', error);
        res.status(500).json({error: error.message });
    }
}

export const getTransportOrderStateHandler = (req: Request, res: Response, next: NextFunction) => {
    const  id = req.params.id;
    console.log('id', id);
    try {
        const state = getTransportOrderState(id);
        console.log('state', state?.orderState);      

        if (state?.orderID) {
            res.status(200).json({ orderState: state.orderState });
        }
        else {
            console.log('Order not found');
            res.status(404).send('Order not found');
        }
    }
    catch (error : any) {
        console.error('Error getting transport order', error);
        res.status(500).json({error: error.message});
    }
}


export const listTransportOrdersHandler = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const orders = listTransportOrders();
        const serializedOrders = Object.values(orders).map(order => serializeTransportOrder(order));
        console.log('serializedOrders', serializedOrders);
        res.status(200).json(serializedOrders );
    } catch (error: any) {
        console.error('Error listing transport orders', error);
        res.status(500).json({ error: error.message });
    }
};
