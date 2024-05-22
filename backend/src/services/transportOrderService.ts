import { ITransportOrder } from '../models/TransportOrder';



// States for a transport order
const states = ['CREATED', 'IN_PROGRESS', 'COMPLETED'];

// In-memory storage for transport orders 
const transportOrders: { [id: string]: ITransportOrder } = {};  

export const createTransportOrder = (orderData: Omit<ITransportOrder, 'orderState' | 'intervalID'>): ITransportOrder => {
    try {
        // Validate order data
        if (!orderData.orderID || typeof orderData.orderID !== 'string') {
            throw new Error('Invalid orderID');
        }
        // Check for duplicated orderID
        if (transportOrders[orderData.orderID]) {
            console.log('Order with the given ID already exists');
            throw new Error('orderID already exists');
        }

        const order: ITransportOrder = {
            ...orderData,
            orderState: 'CREATED',
            intervalID: setInterval(() => changeTransportOrderState(orderData.orderID), 20000) // Change state every 20 seconds
        };
        transportOrders[order.orderID] = order;
        return order;
    } catch (error) {
        console.error('Error creating transport order:', error);
        throw error; 
    }
};


export const getTransportOrderState = (id: string): ITransportOrder | null => {
    try {
        console.log('Fetching order with ID:', id);
        const order = transportOrders[id];
        console.log('orderID', order.orderID);
        if (!order) {
            console.error('No order found with the given ID');
            return null;
        }
        return order;
    }
    catch (error) {
        console.error( error);
        return null;
    }
}

// Updates the state of a transport order based on its ID. advances to next state if not last, else stops the interval.
export const changeTransportOrderState = (id: string): void => {
    const transportOrder = transportOrders[id];
    if (transportOrder) {
        const currentStateIndex = states.indexOf(transportOrder.orderState);
        if (currentStateIndex < states.length - 1) {
            transportOrder.orderState = states[currentStateIndex + 1];
        } else {
            clearInterval(transportOrder.intervalID); // Stop changing state after reaching 'COMPLETED'
        }
    }
}
//Removes the intervalID property from the order object and return the modified object.
export const serializeTransportOrder = (order: ITransportOrder) => {
    const { intervalID, ...orderWithoutInterval } = order;
    return orderWithoutInterval;
};


export const listTransportOrders = (): { [id: string]: ITransportOrder } => {
    return transportOrders;
};

