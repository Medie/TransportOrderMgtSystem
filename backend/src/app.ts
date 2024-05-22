import express from 'express';
import cors from 'cors';
import transportOrderRoutes from './routers/transportOrderRouters';

export default  async function app() {
    try {
        const app = express();
        const port = process.env.NODE_PORT || 3000;

        app.use(cors());
        app.use(express.json()); // for parsing application/json   
        app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded

        app.use(transportOrderRoutes);
        app.listen(port, async () => {
            console.log(`Server running on port ${port}`);
        })
    }
    catch (error) {
        console.error('Error starting server', error);
    }
}

app();
