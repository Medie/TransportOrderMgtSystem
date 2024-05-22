# Transport Order Management System

This project is a Node.js-based backend system for managing transport orders for Automated Guided Vehicles (AGVs).It allows creating, retrieving, and monitoring the state of transport orders.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
* Node.js v18.17.0
* npm@9.6.7

## Features

- Create transport orders
- Retrieve the state of a specific transport order
- List all transport orders

## Technologies Used

- Node.js
- Express.js
- TypeScript

## Installation
1 Clone the repository:
```bash
  git clone  https://github.com/Medie/TransportOrderMgtSystem.git
```
2 Go to the project directory 
```bash
  cd backend
```
3 Install the dependencies:
```bash
  npm install
```
## Running the Application
1 Clone the repository:
```bash
  npm run start
```
The server will start on port 3000 by default.

## API Endpoints
### Create Transport Order
* URL:/api/create
* Method: POST
* Request Body:
```json
 {
    "orderID":"1",
    "source":"Warehouse A",
    "destination":"Warehouse B",
    "priority":1
}
```
Response: 201 Created
```json
{
    "orderID": "1",
    "source": "Warehouse A",
    "destination": "Warehouse B",
    "priority": 1,
    "orderState": "CREATED"
}
```

### Get Transport OrderState
* URL: `/api/orders/:id/state`
* Method: `GET`
* Response: `200 OK`
```json
{
    "orderID": "1",
    "source": "Warehouse A",
    "destination": "Warehouse B",
    "priority": 1,
    "orderState": "CREATED"
}
```
### List All Transport Orders
* URL: `/api/orders`
* Method: `GET`
* Response: `200 OK`
```json
 {
        "orderID": "1",
        "source": "Warehouse A",
        "destination": "Warehouse B",
        "priority": 3,
        "orderState": "CREATED"
    },
    {
        "orderID": "2",
        "source": "Warehouse A",
        "destination": "Warehouse B",
        "priority": 1,
        "orderState": "CREATED"
    }
```
## Project Structure

```plaintext
├── src
│   ├── controllers
│   │   └── transportOrderController.ts
│   ├── models
│   │   └── TransportOrder.ts
│   ├── routes
│   │   └── transportOrderRoutes.ts
│   ├── services
│   │   └── transportOrderService.ts
│   └── app.ts
├── package.json
├── tsconfig.json
└── README.md
```
* models/TransportOrder.ts: Defines the `ITransportOrder` interface.
* services/transportOrderService.ts: Contains functions to manage transport orders.
* controllers/transportOrderController.ts: Handles API requests and responses.
* routes/transportOrderRoutes.ts: Defines the API routes.
* app.ts: Initializes and starts the Express application.
* package.json: Contains the project metadata and dependencies.
* README.md: Provides information about the project.


## Using Postman or another HTTP client: 

1. Start the server
```bash
  npm run start
```
#### Create a new transport order:
* Set the URL to http://localhost:3000/api/create
* Set the method to POST
* Set the body to JSON with the transport order details.

#### Get the state of a transport order:
* Set the URL to http://localhost:3000/api/orders/{orderID}/state (replace {orderID} with the actual order ID)
* Set the method to GET
#### List all transport orders:
* Set the URL to http://localhost:3000/api/orders
* Set the method to GET

## License

This project is licensed under the MIT License. 