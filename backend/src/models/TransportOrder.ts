export interface ITransportOrder {
    orderID: string;
    source: string;
    destination: string;
    priority: number;
    orderState: string;
    intervalID: NodeJS.Timeout;
}